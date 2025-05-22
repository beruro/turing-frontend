<div align="center">
<img src="./logo.svg" width="120" />
</div>
<h1 align="center">Turing Frontend UI</h1>

<div align="center">
React Native UI library for Turing Team
</div>

[ui-npm-url]: https://www.npmjs.com/package/@turing/react-native-ui

<div align="center">

[![](https://img.shields.io/npm/v/@turing/react-native-ui.svg)][ui-npm-url]
[![](https://img.shields.io/npm/dm/@turing/react-native-ui.svg)][ui-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
<br>
[![Platform - Android](https://img.shields.io/badge/platform-Android-3ddc84.svg?logo=android)](https://www.android.com)
[![Platform - iOS](https://img.shields.io/badge/platform-iOS-000.svg?logo=apple)](https://developer.apple.com/ios)

</div>

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

![](./snapshoot.png)

## 特点

- 🛡 纯 TypeScript 实现
- 🌈 部分交互/组件支持函数方式调用
- 🎨 支持自定义主题
- 🚀 针对 Turing 团队项目优化

## 安装

```bash
## react-native-svg 需大于 12.4.1，结合项目的 React Native 选择一个合适的版本
yarn add @turing/react-native-ui react-native-safe-area-context react-native-svg rc-field-form
```

## 使用

```tsx
import React from 'react'
import { Provider, Button } from '@turing/react-native-ui'

const App: React.FC = () => {
  return (
    <Provider>
      <Button text="普通按钮" type="primary" />
    </Provider>
  )
}
```

## Expo

- **Expo demo app**

SDK 53+

<img src="https://qr.expo.dev/eas-update?slug=exp&projectId=610e3121-d086-4484-8023-130dca7937ec&groupId=e1c786d5-e805-4833-a71c-22f98f33f413&host=u.expo.dev" alt="react-native-xiaoshu" width="200">

## 参与开发

欢迎团队成员参与组件库的开发和维护。

## 文档

更多组件的使用方法和示例，请参考内部文档或代码示例。

## Sponsors

<ul style="list-style:none;padding:0;margin:0;">
  <li style="display:flex;align-items:center;gap:16px;">
    <img src="https://zhiyabonsai.com/images/icon.png" alt="知芽App-属于盆景爱好者的专业AI社区" width="48">
    <a target="\_blank" rel="noopener" href="https://zhiyabonsai.com" style="color:#666;">知芽App-属于盆景爱好者的专业AI社区</a>
  </li>
</ul>
