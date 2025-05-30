/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React, { Component } from 'react'

import PortalConsumer from './portal-consumer'
import PortalHost, { portal, PortalContext } from './portal-host'

export type PortalProps = {
  /**
   * Content of the `Portal`.
   */
  children?: React.ReactNode
}

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a `Portal.Host` component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'turing-react-native-ui';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
class Portal extends Component<PortalProps> {
  static Host = PortalHost
  static add = portal.add
  static remove = portal.remove
  render() {
    const { children } = this.props

    return (
      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager}>{children}</PortalConsumer>
        )}
      </PortalContext.Consumer>
    )
  }
}

export default Portal
