"use strict";(self.webpackChunkturing_react_native_ui=self.webpackChunkturing_react_native_ui||[]).push([[7966],{50928:function(E,l,n){var p;n.r(l),n.d(l,{demos:function(){return i}});var P=n(15009),I=n.n(P),o=n(99289),e=n.n(o),u=n(67294),r=n(77884),m=n(40609),_=n(69307),f=n(1982),C=n(1078),i={"src-picker-view-demo-basic":{component:u.memo(u.lazy(function(){return n.e(2433).then(n.bind(n,53487))})),asset:{type:"BLOCK",id:"src-picker-view-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(72442).Z},react:{type:"NPM",value:"18.3.1"},"turing-react-native-ui":{type:"NPM",value:"0.1.1"},"./cascade.tsx":{type:"FILE",value:n(15815).Z},"./multiple.tsx":{type:"FILE",value:n(57615).Z},"./single.tsx":{type:"FILE",value:n(16505).Z}},entry:"index.tsx",description:"\u628A\u5404\u79CD\u573A\u666F\u3001API \u90FD\u8FD0\u7528\u4E86",title:"\u7EFC\u5408\u7528\u6CD5"},context:{"./cascade.tsx":m,"./multiple.tsx":_,"./single.tsx":f,react:p||(p=n.t(u,2)),"react-native":r,"/home/runner/work/turing-frontend/turing-frontend/src/picker-view/__fixtures__/cascade.tsx":m,"/home/runner/work/turing-frontend/turing-frontend/src/picker-view/__fixtures__/multiple.tsx":_,"/home/runner/work/turing-frontend/turing-frontend/src/picker-view/__fixtures__/single.tsx":f,"turing-react-native-ui":C},renderOpts:{compile:function(){var s=e()(I()().mark(function c(){var x,t=arguments;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.e(4019).then(n.bind(n,4019));case 2:return h.abrupt("return",(x=h.sent).default.apply(x,t));case 3:case"end":return h.stop()}},c)}));function a(){return s.apply(this,arguments)}return a}()}}}},40609:function(E,l,n){n.r(l);var p=n(5574),P=n.n(p),I=n(67294),o=n(1078),e=n(85893),u=function(i,s,a,c){return new Array(i).fill(0).map(function(x,t){return{label:"".concat(a,"_").concat(t),value:"".concat(s,"_").concat(t),children:c?c("".concat(s,"_").concat(t),"".concat(a,"_").concat(t)):void 0}})},r=u(8,"sj","\u7701\u7EA7",function(C,i){return u(6,C.replace("sj","sq"),i.replace("\u7701\u7EA7","\u5E02\u533A"),function(s,a){return u(4,s.replace("sq","qx"),a.replace("\u5E02\u533A","\u533A\u53BF"))})}),m=["sj_5","sq_5_2","qx_5_2_2"],_=["sj_2"],f=function(){var i=(0,I.useState)([]),s=P()(i,2),a=s[0],c=s[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:r,onChange:function(t,g){console.log("\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)},defaultValue:m})}),(0,e.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C2:\u975E\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:r,onChange:function(t,g){console.log("\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)},defaultValue:_})}),(0,e.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:r,value:a,onChange:function(t,g){console.log("\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g),c(t)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,e.jsx)(o.PickerView,{columns:r,value:a,onChange:function(t,g){console.log("\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",t),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",g)}})})]})};l.default=f},69307:function(E,l,n){n.r(l);var p=n(5574),P=n.n(p),I=n(67294),o=n(1078),e=n(85893),u=new Array(10).fill(0).map(function(C,i){return{label:"\u9009\u9879".concat(i),value:"".concat(i),disabled:i===6}}),r=[u,u,u,u],m=[{options:u,defaultValue:"4"},{options:u,defaultValue:"2"},{options:u,defaultValue:"9"}],_=[r[0][5].value,r[1][3].value],f=function(){var i=(0,I.useState)([r[0][3].value,r[1][2].value]),s=P()(i,2),a=s[0],c=s[1],x=(0,I.useState)([]),t=P()(x,2),g=t[0],h=t[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:r,value:a,onChange:function(d,v){console.log("\u591A\u5217\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v),c(d)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,e.jsx)(o.PickerView,{columns:r,value:a,onChange:function(d,v){console.log("\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C",children:(0,e.jsx)(o.PickerView,{columns:r,defaultValue:_,onChange:function(d,v){console.log("\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:m,onChange:function(d,v){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7>>>",children:(0,e.jsx)(o.PickerView,{columns:m,defaultValue:_,onChange:function(d,v){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:m,value:g,onChange:function(d,v){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v),h(d)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,e.jsx)(o.PickerView,{columns:m,value:g,onChange:function(d,v){console.log("\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",d),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",v)}})})]})};l.default=f},1982:function(E,l,n){n.r(l);var p=n(5574),P=n.n(p),I=n(67294),o=n(1078),e=n(85893),u=new Array(10).fill(0).map(function(m,_){return{label:"\u9009\u9879".concat(_),value:"".concat(_),disabled:_===6}}),r=function(){var _=(0,I.useState)([u[1].value]),f=P()(_,2),C=f[0],i=f[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:u,onChange:function(a,c){console.log("\u5355\u5217\u9009\u62E9:\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",a),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",c),i(a)},value:C})}),(0,e.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0",children:(0,e.jsx)(o.PickerView,{columns:u,onChange:function(a,c){console.log("\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",a),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",c)},value:C})}),(0,e.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7",children:(0,e.jsx)(o.PickerView,{columns:u,onChange:function(a,c){console.log("\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",a),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",c)}})}),(0,e.jsx)(o.Cell.Group,{title:"\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C",children:(0,e.jsx)(o.PickerView,{columns:u,onChange:function(a,c){console.log("\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C"),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:",a),console.log("\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:",c)},defaultValue:[u[5].value]})})]})};l.default=r},38076:function(E,l,n){n.r(l),n.d(l,{texts:function(){return p}});const p=[{value:"\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u89C6\u56FE\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u7EA7\u8054\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"\u53D7\u63A7\u6A21\u5F0F\u6240\u663E\u793A\u7684\u503C",paraId:1,tocIndex:3},{value:"PickerValue[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"defaultValue",paraId:1,tocIndex:3},{value:"\u975E\u53D7\u63A7\u6A21\u5F0F\u7684\u521D\u59CB\u503C",paraId:1,tocIndex:3},{value:"PickerValue[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:3},{value:"(values:PickerValue[], options:Column[]) => void",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"columns",paraId:1,tocIndex:3},{value:"\u9009\u9879\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E",paraId:1,tocIndex:3},{value:"Column[]",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"loading",paraId:1,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u52A0\u8F7D\u72B6\u6001",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"itemHeight",paraId:1,tocIndex:3},{value:"\u9009\u9879\u9AD8\u5EA6",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"50",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"visibleItemCount",paraId:1,tocIndex:3},{value:"\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570\uFF0C\u5947\u6570",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"5",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u540D\u79F0",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"picker_view_background_color",paraId:2,tocIndex:4},{value:"TOKENS.white",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_mask_background_color",paraId:2,tocIndex:4},{value:"TOKENS.white",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_color",paraId:2,tocIndex:4},{value:"TOKENS.gray_8",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_disabled_color",paraId:2,tocIndex:4},{value:"TOKENS.gray_6",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"picker_view_column_text_font_size",paraId:2,tocIndex:4},{value:"TOKENS.font_size_5",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onChange",paraId:3},{value:"ScrollView event handlers not working: onScrollBeginDrag, onScrollEndDrag, onMomentumScrollBegin, onMomentumScrollEnd",paraId:4,tocIndex:6}]},72442:function(E,l){l.Z=`import React from 'react'
import { ScrollView } from 'react-native'

import PickerViewSingle from './single'
import PickerViewMultiple from './multiple'
import PickerViewCascade from './cascade'

const BasicMultiple: React.FC = () => {
  return (
    <ScrollView>
      <PickerViewSingle />

      <PickerViewMultiple />

      <PickerViewCascade />
    </ScrollView>
  )
}

export default BasicMultiple
`},15815:function(E,l){l.Z=`import React, { useState } from 'react'

import type { PickerOptionCascade } from 'turing-react-native-ui'
import { PickerView, Cell } from 'turing-react-native-ui'

const buildChildren = (
  num: number,
  valuePrefix: string,
  labelPrefix: string,
  insertChildren?: (value: string, label: string) => PickerOptionCascade[],
  // eslint-disable-next-line max-params
) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: \`\${labelPrefix}_\${index}\`,
    value: \`\${valuePrefix}_\${index}\`,
    children: insertChildren
      ? insertChildren(\`\${valuePrefix}_\${index}\`, \`\${labelPrefix}_\${index}\`)
      : undefined,
  }))
}

const columns4 = buildChildren(8, 'sj', '\u7701\u7EA7', (sjValue, sjLabel) =>
  buildChildren(
    6,
    sjValue.replace('sj', 'sq'),
    sjLabel.replace('\u7701\u7EA7', '\u5E02\u533A'),
    (sqValue, sqLabel) =>
      buildChildren(
        4,
        sqValue.replace('sq', 'qx'),
        sqLabel.replace('\u5E02\u533A', '\u533A\u53BF'),
      ),
  ),
)

const defaultValue = ['sj_5', 'sq_5_2', 'qx_5_2_2']

const defaultValue2 = ['sj_2']

const PickerViewCascade: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([])

  return (
    <>
      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns4}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={defaultValue}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u9ED8\u8BA4\u503C2:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns4}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={defaultValue2}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns4}
          value={value}
          onChange={(v, o) => {
            console.log('\u7EA7\u8054\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewCascade
`},57615:function(E,l){l.Z=`import React, { useState } from 'react'
import { PickerView, Cell } from 'turing-react-native-ui'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: \`\u9009\u9879\${index}\`,
  value: \`\${index}\`,
  disabled: index === 6,
}))

const columns2 = [columns1, columns1, columns1, columns1]

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '9',
  },
]

const defaultValue = [columns2[0][5].value, columns2[1][3].value]

const PickerViewMultiple: React.FC = () => {
  const [value1, setValue1] = useState<(string | number)[]>([
    columns2[0][3].value,
    columns2[1][2].value,
  ])
  const [value2, setValue2] = useState<(string | number)[]>([])

  return (
    <>
      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue1(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns2}
          value={value1}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C">
        <PickerView
          columns={columns2}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns3}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7>>>">
        <PickerView
          columns={columns3}
          defaultValue={defaultValue}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue2(v)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns3}
          value={value2}
          onChange={(v, o) => {
            console.log('\u591A\u5217\u5E26\u9ED8\u8BA4\u503C:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewMultiple
`},16505:function(E,l){l.Z=`import React, { useState } from 'react'

import { PickerView, Cell } from 'turing-react-native-ui'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: \`\u9009\u9879\${index}\`,
  value: \`\${index}\`,
  disabled: index === 6,
}))

const PickerViewSingle: React.FC = () => {
  const [value, setValue] = useState<(string | number)[]>([columns1[1].value])

  return (
    <>
      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u53D7\u63A7">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
            setValue(v)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u53D7\u63A7\u4E0D\u66F4\u65B0')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          value={value}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
        />
      </Cell.Group>

      <Cell.Group title="\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C">
        <PickerView
          columns={columns1}
          onChange={(v, o) => {
            console.log('\u5355\u5217\u9009\u62E9:\u975E\u53D7\u63A7\u9ED8\u8BA4\u503C')
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> values:', v)
            console.log('\u6ED1\u52A8\u5B8C\u6210\u5C31\u89E6\u53D1 -> options:', o)
          }}
          defaultValue={[columns1[5].value]}
        />
      </Cell.Group>
    </>
  )
}

export default PickerViewSingle
`}}]);
