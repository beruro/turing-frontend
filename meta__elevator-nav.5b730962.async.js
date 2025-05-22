"use strict";(self.webpackChunkturing_react_native_ui=self.webpackChunkturing_react_native_ui||[]).push([[5527],{19655:function(o,n,e){var t;e.r(n),e.d(n,{demos:function(){return I}});var u=e(15009),l=e.n(u),i=e(99289),c=e.n(i),a=e(67294),s=e(77884),v=e(1078),I={"src-elevator-nav-demo-basic":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,47632))})),asset:{type:"BLOCK",id:"src-elevator-nav-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66744).Z},react:{type:"NPM",value:"18.3.1"},"turing-react-native-ui":{type:"NPM",value:"0.1.2"}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:t||(t=e.t(a,2)),"react-native":s,"turing-react-native-ui":v},renderOpts:{compile:function(){var p=c()(l()().mark(function _(){var d,f=arguments;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,f));case 3:case"end":return r.stop()}},_)}));function m(){return p.apply(this,arguments)}return m}()}}}},33156:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"0.3.17+",paraId:0},{value:"\u7EE7\u627F ScrollViewProps\u3002",paraId:1,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"\u7248\u672C",paraId:2,tocIndex:4},{value:"triggerOffset",paraId:2,tocIndex:4},{value:"\u6EDA\u52A8\u5927\u4E8E\u591A\u5C11\u65F6\u51FA\u73B0\u5BFC\u822A\u680F",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"100",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"tabBarHeight",paraId:2,tocIndex:4},{value:"\u5BFC\u822A\u680F\u9AD8\u5EA6\uFF0C\u6682\u65F6\u672A\u5F00\u653E\u81EA\u5B9A\u4E49\u5BFC\u822A\u529F\u80FD",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"40",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"scrollComponent",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6EDA\u52A8\u7EC4\u4EF6",paraId:2,tocIndex:4},{value:"React.FC<ScrollViewProps & { ref:React.MutableRefObject<ScrollView> }>",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:5},{value:"\u63CF\u8FF0",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u7248\u672C",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"\u552F\u4E00\u7684 title",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5}]},66744:function(o,n){n.Z=`import React, { useState } from 'react'
import { Text, View } from 'react-native'

// import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react'
// import { Text, View, ScrollView } from 'react-native'
// import {
//   KeyboardAwareScrollView,
//   KeyboardAwareScrollViewProps,
// } from 'react-native-keyboard-aware-scroll-view'

import {
  Card,
  Space,
  ElevatorNav,
  Button,
  TextInput,
} from 'turing-react-native-ui'

// const CustomKeyboardAwareScrollView = forwardRef<
//   ScrollView,
//   KeyboardAwareScrollViewProps
// >((props, ref) => {
//   const ScrollViewRef = useRef<ScrollView>()

//   useImperativeHandle(ref, () => {
//     return ScrollViewRef.current
//   })

//   return (
//     <KeyboardAwareScrollView
//       {...props}
//       extraScrollHeight={60}
//       innerRef={ref => {
//         props.innerRef?.(ref)
//         ScrollViewRef.current = ref as any
//       }}
//     />
//   )
// })

const BasicTag: React.FC = () => {
  const [more1, setMore1] = useState(false)
  const [more2, setMore2] = useState(false)

  return (
    <>
      <Space direction="horizontal">
        <Button
          text={\`\${more1 ? '\u51CF\u5C11' : '\u65B0\u589E'}\u4E00\u4E2A Anchor\uFF08\u53EF\u80FD\u4F1A\u62A5\u9519\uFF09\`}
          size="s"
          onPress={() => {
            setMore1(s => !s)
          }}
        />
        <Button
          text={\`\${more2 ? '\u51CF\u5C11' : '\u65B0\u589E'}\u4E00\u4E2A\u975E Anchor\`}
          size="s"
          onPress={() => {
            setMore2(s => !s)
          }}
        />
      </Space>

      <ElevatorNav
        triggerOffset={500}
        // scrollComponent={CustomKeyboardAwareScrollView as any}>
      >
        <Space tail head>
          <View style={{ height: 500, backgroundColor: '#f09' }}>
            <Text>\u5176\u4ED6\u975E\u951A\u70B9\u533A\u57DF</Text>
          </View>

          <ElevatorNav.Anchor title="\u57FA\u7840\u7528\u6CD5">
            <Card title="\u57FA\u7840\u7528\u6CD5" square>
              <View style={{ height: 220, backgroundColor: '#098' }} />
            </Card>
          </ElevatorNav.Anchor>

          {more2 ? (
            <View style={{ height: 500, backgroundColor: '#f76' }}>
              <Text>\u5176\u4ED6\u975E\u951A\u70B9\u533A\u57DF</Text>
            </View>
          ) : null}

          <ElevatorNav.Anchor title="\u57FA\u7840\u7528\u6CD52">
            <Card title="\u57FA\u7840\u7528\u6CD52" square>
              <View style={{ height: 520, backgroundColor: '#123' }} />
            </Card>
          </ElevatorNav.Anchor>

          {more1 ? (
            <ElevatorNav.Anchor title="\u57FA\u7840\u7528\u6CD5more">
              <Card title="\u57FA\u7840\u7528\u6CD5more" square>
                <View style={{ height: 620, backgroundColor: '#6787' }} />
              </Card>
            </ElevatorNav.Anchor>
          ) : null}

          <ElevatorNav.Anchor title="\u57FA\u7840\u7528\u6CD53">
            <Card title="\u57FA\u7840\u7528\u6CD53" square>
              <View style={{ height: 420, backgroundColor: '#fa7' }} />
            </Card>
          </ElevatorNav.Anchor>

          <TextInput placeholder="\u8BF7\u8F93\u5165\u4EC0\u4E48" />

          <View style={{ height: 500, backgroundColor: '#ac6' }}>
            <Text>\u5176\u4ED6\u975E\u951A\u70B9\u533A\u57DF</Text>
          </View>
        </Space>
      </ElevatorNav>
    </>
  )
}

export default BasicTag
`}}]);
