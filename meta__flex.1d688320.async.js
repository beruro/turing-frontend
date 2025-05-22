"use strict";(self.webpackChunkturing_react_native_ui=self.webpackChunkturing_react_native_ui||[]).push([[8674],{43716:function(l,n,e){var a;e.r(n),e.d(n,{demos:function(){return I}});var i=e(15009),d=e.n(i),u=e(99289),c=e.n(u),r=e(67294),s=e(77884),x=e(1078),I={"flex-demo-basic":{component:r.memo(r.lazy(function(){return e.e(3304).then(e.bind(e,620))})),asset:{type:"BLOCK",id:"flex-demo-basic",refAtomIds:["flex"],dependencies:{"index.tsx":{type:"FILE",value:e(14382).Z},react:{type:"NPM",value:"18.3.1"},"turing-react-native-ui":{type:"NPM",value:"0.1.2"}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{react:a||(a=e.t(r,2)),"react-native":s,"turing-react-native-ui":x},renderOpts:{compile:function(){var p=c()(d()().mark(function _(){var o,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,v));case 3:case"end":return t.stop()}},_)}));function m(){return p.apply(this,arguments)}return m}()}}}},70721:function(l,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Flex \u662F CSS flex \u5E03\u5C40\u7684\u4E00\u4E2A\u5C01\u88C5\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u7248\u672C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"flexDirection",paraId:1,tocIndex:4},{value:"FlexStyle['flexDirection']",paraId:1,tocIndex:4},{value:"'row'",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"wrap",paraId:1,tocIndex:4},{value:"flexWrap",paraId:1,tocIndex:4},{value:"FlexStyle['flexWrap']",paraId:1,tocIndex:4},{value:"'nowrap'",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"justify",paraId:1,tocIndex:4},{value:"justifyContent",paraId:1,tocIndex:4},{value:"FlexJustify",paraId:1,tocIndex:4},{value:"'start'",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"alignItems",paraId:1,tocIndex:4},{value:"FlexAlign",paraId:1,tocIndex:4},{value:"'center'",paraId:1,tocIndex:4},{value:"-",paraId:1,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:5},{value:"\u63CF\u8FF0",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"\u7248\u672C",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:"FlexStyle['flex']",paraId:2,tocIndex:5},{value:"1",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},14382:function(l,n){n.Z=`import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Flex, Card, Space } from 'turing-react-native-ui'

const Circle = (props: { size?: number }) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

const BasicFlex: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Card title="\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411" square>
          <Space>
            <Text>direction="row":\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF</Text>

            <Flex>
              <Flex.Item style={{ paddingRight: 4 }}>
                <Button size="xs">\u6309\u94AE1</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
                <Button size="xs">\u6309\u94AE2</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingLeft: 4 }}>
                <Button size="xs">\u6309\u94AE3</Button>
              </Flex.Item>
            </Flex>

            <Text>direction="column":\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF</Text>

            <Flex direction="column">
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">\u6309\u94AE1</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">\u6309\u94AE2</Button>
              </Flex.Item>
              <Flex.Item style={{ paddingBottom: 4 }}>
                <Button size="xs">\u6309\u94AE3</Button>
              </Flex.Item>
            </Flex>
          </Space>
        </Card>

        <Card title="\u5BF9\u9F50\u65B9\u5F0F" square>
          <Space>
            <Text>justify="start":\u5DE6\u5BF9\u9F50</Text>
            <Flex justify="start">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>

            <Text>justify="center":\u5C45\u4E2D</Text>

            <Flex justify="center">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>

            <Text>justify="end":\u53F3\u5BF9\u9F50</Text>

            <Flex justify="end">
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
            </Flex>
          </Space>
        </Card>

        <Card title="\u7EC4\u5408\u4F7F\u7528" square>
          <Flex justify="between">
            <Circle />

            <Flex align="center">
              <Circle />
              <Circle size={40} />
            </Flex>
          </Flex>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicFlex
`}}]);
