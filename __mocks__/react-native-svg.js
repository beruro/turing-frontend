// Mock for react-native-svg
const React = require('react');

const mockComponent = (name) => {
  const MockComponent = function(props) {
    return React.createElement(name, props, props.children);
  };
  
  // 添加displayName
  MockComponent.displayName = name;
  return MockComponent;
};

// Mock all common SVG components
module.exports = {
  Svg: mockComponent('Svg'),
  Circle: mockComponent('Circle'),
  Ellipse: mockComponent('Ellipse'),
  G: mockComponent('G'),
  Text: mockComponent('Text'),
  TSpan: mockComponent('TSpan'),
  TextPath: mockComponent('TextPath'),
  Path: mockComponent('Path'),
  Polygon: mockComponent('Polygon'),
  Polyline: mockComponent('Polyline'),
  Line: mockComponent('Line'),
  Rect: mockComponent('Rect'),
  Use: mockComponent('Use'),
  Image: mockComponent('Image'),
  Symbol: mockComponent('Symbol'),
  Defs: mockComponent('Defs'),
  LinearGradient: mockComponent('LinearGradient'),
  RadialGradient: mockComponent('RadialGradient'),
  Stop: mockComponent('Stop'),
  ClipPath: mockComponent('ClipPath'),
  Pattern: mockComponent('Pattern'),
  Mask: mockComponent('Mask'),
  SvgXml: mockComponent('SvgXml'),
  SvgUri: mockComponent('SvgUri'),
  SvgCss: mockComponent('SvgCss'),
  SvgWithCss: mockComponent('SvgWithCss'),
  SvgCssUri: mockComponent('SvgCssUri'),
  SvgFromUri: mockComponent('SvgFromUri'),
  Symbols: mockComponent('Symbols'),
  SvgFromXml: mockComponent('SvgFromXml'),
  SvgFromProps: mockComponent('SvgFromProps'),
  TouchableOpacity: mockComponent('TouchableOpacity'),
  Touchable: {
    Mixin: {}  // Mock Touchable.Mixin
  }
}; 