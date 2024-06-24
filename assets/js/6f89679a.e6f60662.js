"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[561],{2154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(4848),i=t(5680);const a={slug:"release-v1.1",title:"Release v1.1",tags:["v1.1","release"]},o=void 0,s={permalink:"/blog/release-v1.1",editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2023-07-18-release-1.1.mdx",source:"@site/blog/2023-07-18-release-1.1.mdx",title:"Release v1.1",description:"Added",date:"2023-07-18T00:00:00.000Z",tags:[{inline:!0,label:"v1.1",permalink:"/blog/tags/v-1-1"},{inline:!0,label:"release",permalink:"/blog/tags/release"}],readingTime:2.34,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"release-v1.1",title:"Release v1.1",tags:["v1.1","release"]},unlisted:!1,prevItem:{title:"Release v1.2",permalink:"/blog/release-v1.2"},nextItem:{title:"Release v1.0",permalink:"/blog/release-v1.0"}},l={authorsImageUrls:[]},d=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Changed",id:"changed",level:3},{value:"API",id:"api",level:4},{value:"API Deployment",id:"api-deployment",level:4},{value:"SDK",id:"sdk",level:4},{value:"Other",id:"other",level:4},{value:"Upgrading from 1.0.0 to 1.1.0",id:"upgrading-from-100-to-110",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,i.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"added",children:"Added"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added Electricity Maps (paid api) support for forecasting and historical data."}),"\n",(0,r.jsx)(n.li,{children:"Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"fixed",children:"Fixed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time."}),"\n",(0,r.jsx)(n.li,{children:"Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent."}),"\n",(0,r.jsx)(n.li,{children:"Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure."}),"\n",(0,r.jsx)(n.li,{children:"Fixes some bugs in unit tests with uncaught scenarios, or faulty tests."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changed",children:"Changed"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No previous API's were changed."}),"\n",(0,r.jsx)(n.li,{children:"Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below."}),"\n",(0,r.jsx)(n.li,{children:"Time is now always in UTC.  Previously the API may have returned local time depending on underlying API."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"api",children:"API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/locations"})," - Show the list of configured named locations that can be used in the API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/api/v1/swagger.yaml"})," - Provides OpenAPI document now at public endpoint when deployed."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"api-deployment",children:"API Deployment"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"sdk",children:"SDK"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability."}),"\n",(0,r.jsx)(n.li,{children:"Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information."}),"\n",(0,r.jsx)(n.li,{children:"Additional tests across the SDK have been added."}),"\n",(0,r.jsx)(n.li,{children:"Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"other",children:"Other"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All contributors need to signoff commits for contribution using ",(0,r.jsx)(n.code,{children:"git commit -s"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Added PR release workflow improvements for the project management of the CA SDK project team."}),"\n",(0,r.jsx)(n.li,{children:"Updated the project to prune stale PR's and issues to help with the management of the CA SDK project."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"upgrading-from-100-to-110",children:"Upgrading from 1.0.0 to 1.1.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - ",(0,r.jsx)(n.a,{href:"../docs/tutorial-extras/configuration",children:"Configuration"})," for a guide. The following is provided as an example of the new data source configuration format."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "DataSources": {\n    "EmissionsDataSource": "Json",\n    "ForecastDataSource": "WattTime",\n    "Configurations": {\n      "WattTime": {\n        "Type": "WattTime",\n        "Username": "username",\n        "Password": "password",\n        "BaseURL": "https://api2.watttime.org/v2/",\n        "Proxy": {\n          "useProxy": true,\n          "url": "http://10.10.10.1",\n          "username": "proxyUsername",\n          "password": "proxyPassword"\n        }\n      },\n      "ElectricityMaps": {\n        "Type": "ElectricityMaps",\n        "APITokenHeader": "auth-token",\n        "APIToken": "myAwesomeToken",\n        "BaseURL": "https://api.electricitymap.org/v3/"\n      },\n      "Json": {\n        "Type": "Json",\n        "DataFileLocation": "test-data-azure-emissions.json"\n      }\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=i,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return t?r.createElement(m,o(o({ref:n},h),{},{components:t})):r.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);