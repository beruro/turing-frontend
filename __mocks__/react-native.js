// Mock for React Native
const reactNative = jest.requireActual('react-native');
const React = require('react');

// 创建基础组件的mock
const mockComponent = (name) => {
  const MockComponent = function(props) {
    return React.createElement(name, { ...props, testID: props.testID }, props.children);
  };
  
  // 添加displayName
  MockComponent.displayName = name;
  return MockComponent;
};

// 创建一个简单的EventEmitter类
class MockEventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(eventType, listener) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
    return {
      remove: () => {
        this.removeListener(eventType, listener);
      }
    };
  }

  removeListener(eventType, listener) {
    if (this.listeners[eventType]) {
      this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
    }
  }

  removeAllListeners(eventType) {
    if (eventType) {
      delete this.listeners[eventType];
    } else {
      this.listeners = {};
    }
  }

  emit(eventType, ...args) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].forEach(listener => {
        listener(...args);
      });
    }
  }
}

// 使用MockEventEmitter创建DeviceEventEmitter
const DeviceEventEmitter = new MockEventEmitter();

// 创建Animated组件
const createAnimatedComponent = (Component) => {
  const AnimatedComponent = (props) => {
    return React.createElement(Component, props);
  };
  AnimatedComponent.displayName = `Animated.${Component.displayName || Component.name || 'Component'}`;
  return AnimatedComponent;
};

// 常用组件的mock
const components = {
  View: mockComponent('View'),
  Text: mockComponent('Text'),
  ScrollView: mockComponent('ScrollView'),
  TouchableOpacity: mockComponent('TouchableOpacity'),
  TextInput: mockComponent('TextInput'),
  Image: mockComponent('Image'),
  ActivityIndicator: mockComponent('ActivityIndicator'),
  FlatList: mockComponent('FlatList'),
  SectionList: mockComponent('SectionList'),
  Animated: {
    View: createAnimatedComponent(mockComponent('View')),
    Text: createAnimatedComponent(mockComponent('Text')),
    Image: createAnimatedComponent(mockComponent('Image')),
    createAnimatedComponent: createAnimatedComponent,
    Value: jest.fn(() => ({
      interpolate: jest.fn(),
      setValue: jest.fn(),
    })),
    timing: jest.fn(() => ({
      start: jest.fn(cb => cb && cb()),
    })),
  },
  StyleSheet: {
    create: styles => styles,
    flatten: jest.fn(style => style),
  },
  Platform: {
    OS: 'ios',
    select: jest.fn(obj => obj.ios),
  },
  Dimensions: {
    get: jest.fn(() => ({ width: 375, height: 667 })),
  },
  Keyboard: {
    dismiss: jest.fn(),
    addListener: jest.fn(() => ({ remove: jest.fn() })),
    removeListener: jest.fn(),
  },
  // 添加Easing模块的mock
  Easing: {
    step0: jest.fn(),
    step1: jest.fn(),
    linear: jest.fn(),
    ease: jest.fn(),
    quad: jest.fn(),
    cubic: jest.fn(),
    poly: jest.fn(),
    sin: jest.fn(),
    circle: jest.fn(),
    exp: jest.fn(),
    elastic: jest.fn(() => jest.fn()),
    back: jest.fn(),
    bounce: jest.fn(),
    bezier: jest.fn(() => jest.fn()),
    in: jest.fn(() => jest.fn()),
    out: jest.fn(() => jest.fn()),
    inOut: jest.fn(() => jest.fn()),
  },
  // 添加Touchable组件的mock
  Touchable: {
    Mixin: {
      touchableHandleStartShouldSetResponder: jest.fn(),
      touchableHandleResponderTerminationRequest: jest.fn(),
      touchableHandleResponderGrant: jest.fn(),
      touchableHandleResponderMove: jest.fn(),
      touchableHandleResponderRelease: jest.fn(),
      touchableHandleResponderTerminate: jest.fn(),
    }
  },
  // 添加事件发射器
  NativeEventEmitter: jest.fn().mockImplementation(() => {
    return new MockEventEmitter();
  }),
  DeviceEventEmitter
};

module.exports = {
  ...reactNative,
  ...components,
}; 