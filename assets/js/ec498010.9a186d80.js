"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[9665],{1403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453);const r={},a="0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",c={id:"architecture/decisions/electricity-maps-free",title:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",description:"Status",source:"@site/docs/architecture/decisions/0012-electricity-maps-free.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/electricity-maps-free",permalink:"/docs/architecture/decisions/electricity-maps-free",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0012-electricity-maps-free.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0011. CD pipeline for release process",permalink:"/docs/architecture/decisions/cd-pipeline"},next:{title:"0013. Remove Aggregator layer from the Carbon Aware Architechture",permalink:"/docs/architecture/decisions/remove-aggregator-layer"}},o={},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Green Impact",id:"green-impact",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"0012-treat-electricity-maps-and-electricity-maps-free-as-different-unrelated-data-sources",children:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources"})}),"\n",(0,s.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:"Approved"}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsx)(t.p,{children:"Electricity Maps offers two different services:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"the paid one, which has already been added to the dev branch of the Carbon Aware SDK,"}),"\n",(0,s.jsxs)(t.li,{children:['and the free one, which they also call "CO2 Signal" (',(0,s.jsx)(t.a,{href:"https://www.co2signal.com/",children:"https://www.co2signal.com/"}),"), which the Carbon Aware SDK already supports in a ",(0,s.jsx)(t.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/tree/feat/electricity-map",children:"branch"}),", though it is based on an older, now outdated version of the SDK."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["These two services, despite being provided by the same company, use different APIs. The free API isn't just a subset of the paid one: ",(0,s.jsx)(t.strong,{children:"the endpoints are different, the tokens are different, and the responses are different"}),". Here's an example of two equivalent calls to these services, getting the latest value for the Carbon Intensity in France:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["ElectricityMaps free (CO2 Signal):","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Documentation: ",(0,s.jsx)(t.a,{href:"https://docs.co2signal.com/",children:"https://docs.co2signal.com/"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Request:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"curl -s 'https://api.co2signal.com/v1/latest?countryCode=FR' -H 'auth-token: myapitoken'"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Response:"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'        {\n          "_disclaimer": "This data is the exclusive property of Electricity Maps and/or related parties. If you\'re in doubt about your rights to use this data, please contact api@co2signal.com",\n          "status": "ok",\n          "countryCode": "FR",\n          "data": {\n            "datetime": "2023-01-23T17:00:00.000Z",\n            "carbonIntensity": 103,\n            "fossilFuelPercentage": 13.639999999999999\n          },\n          "units": {\n            "carbonIntensity": "gCO2eq/kWh"\n          }\n        }\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["ElectricityMaps paid:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Documentation: ",(0,s.jsx)(t.a,{href:"https://static.electricitymaps.com/api/docs/index.html",children:"https://static.electricitymaps.com/api/docs/index.html"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Request:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"curl -s 'https://api.electricitymap.org/v3/carbon-intensity/latest?zone=FR' -H 'auth-token: myapitoken'"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Response:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'    {\n      "zone": "FR",\n      "carbonIntensity": 103,\n      "datetime": "2023-01-23T17:00:00.000Z",\n      "updatedAt": "2023-01-23T16:53:20.794Z",\n      "emissionFactorType": "lifecycle",\n      "isEstimated": true,\n      "estimationMethod": "TIME_SLICER_AVERAGE"\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The goal is to support both services, to maximize the usage of the Carbon Aware SDK. The question is how to handle these differences.\nTreating them as the same data source would require to add some complexity, to distinguish whether an account is free or paid. This distinction would have to be either in the form of an extra parameter, or it would require the Carbon Aware SDK to test every time (at least once per session) which service is meant, using a fallback logic: try the paid service first, and if you get an error try the free one. This adds complexity, requires managing the error code, and in any case forces to make more calls, which has a negative impact on the emissions."}),"\n",(0,s.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsx)(t.p,{children:'Since the endpoints, the tokens and the output format are all different, it is easier to treat them as different data sources, unrelated to each other, called "Electricty Maps" and "Electricty Maps Free". This approach requires the user to explicitly indicate what service they want to use, but then every other problem is solved automatically.'}),"\n",(0,s.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsxs)(t.p,{children:["The new data source will have to be added following the ",(0,s.jsx)(t.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/Changelog/docs/architecture/data-sources.md#user-content-creating-a-new-data-source",children:"instructions"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,s.jsx)(t.p,{children:"Neutral. This is an implementation detail, under the hood. It has no impact for the users of the Carbon Aware SDK."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);