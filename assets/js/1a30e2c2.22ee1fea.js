"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[594],{9013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var n=r(4848),s=r(5680);const c={sidebar_position:1},i="Selecting a Data Source",a={id:"tutorial-extras/selecting-a-data-source",title:"Selecting a Data Source",description:"The Carbon Aware SDK includes access to various data sources of carbon aware",source:"@site/docs/tutorial-extras/selecting-a-data-source.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/selecting-a-data-source",permalink:"/docs/tutorial-extras/selecting-a-data-source",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-extras/selecting-a-data-source.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"Carbon Aware Library",permalink:"/docs/tutorial-extras/carbon-aware-library"}},l={},o=[{value:"Contents",id:"contents",level:2},{value:"Type of Data Sources and Configuration",id:"type-of-data-sources-and-configuration",level:2},{value:"Data Source Methods Available",id:"data-source-methods-available",level:2},{value:"Location Coverage",id:"location-coverage",level:2},{value:"Restrictions: free trial of ElectricityMaps",id:"restrictions-free-trial-of-electricitymaps",level:2},{value:"Restricted Zone Access",id:"restricted-zone-access",level:3},{value:"Restricted Endpoint Access",id:"restricted-endpoint-access",level:3},{value:"Restricted Call Access",id:"restricted-call-access",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"selecting-a-data-source",children:"Selecting a Data Source"}),"\n",(0,n.jsx)(t.p,{children:"The Carbon Aware SDK includes access to various data sources of carbon aware\ndata, including WattTime, ElectricityMaps, ElectricityMapsFree, and a custom\nJSON source. These matrices are an attempt to track what features of the Carbon\nAware SDK are enabled for which data sources."}),"\n",(0,n.jsx)(t.h2,{id:"contents",children:"Contents"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#type-of-data-sources-and-configuration",children:"Type of Data Sources and Configuration"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#data-source-methods-available",children:"Data Source Methods Available"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#location-coverage",children:"Location Coverage"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#restrictions-electricitymaps-free-trial-user",children:"Restriction: ElectricityMaps Free Trial User"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"type-of-data-sources-and-configuration",children:"Type of Data Sources and Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["In the CarbonAware SDK configuration, you can set what data source to use as the\n",(0,n.jsx)(t.code,{children:"EmissionsDataSource"})," and the ",(0,n.jsx)(t.code,{children:"ForecastDataSource"}),". There are also certain\nconfiguration fields that must be set in order to access the raw data."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"WattTime"}),(0,n.jsx)(t.th,{children:"ElectricityMaps"}),(0,n.jsx)(t.th,{children:"ElectricityMapsFree"}),(0,n.jsx)(t.th,{children:"JSON"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Is Emissions DataSource"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Is Forecast DataSource"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Makes HTTP(s) call"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Can Use Custom Data"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Supports Trial + Full Account"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsxs)(t.td,{children:["\u2705 (*",(0,n.jsx)(t.a,{href:"#restrictions-electricitymaps-free-trial-user",children:"see restriction below"}),")"]}),(0,n.jsx)(t.td,{children:"N/A"}),(0,n.jsx)(t.td,{children:"N/A"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"data-source-methods-available",children:"Data Source Methods Available"}),"\n",(0,n.jsxs)(t.p,{children:["Not all data sources support all the routes provided in the interfaces\n(",(0,n.jsx)(t.code,{children:"IEmissionsDataSource"}),"/",(0,n.jsx)(t.code,{children:"IForecastDataSource"}),")."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Methods"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"WattTime"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"ElectricityMaps"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"ElectricityMapsFree"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"JSON"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"CLI Usage"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Web Api Usage"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"SDK Usage"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GetCarbonIntensityAsync"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"emissions"})}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"emissions/bylocation"})," or ",(0,n.jsx)(t.code,{children:"emissions/bylocations"})," or ",(0,n.jsx)(t.code,{children:"emissions/bylocations/best"})," or ",(0,n.jsx)(t.code,{children:"emissions/average"}),"\u2011",(0,n.jsx)(t.code,{children:"carbon"}),"\u2011",(0,n.jsx)(t.code,{children:"intensity"})," or ",(0,n.jsx)(t.code,{children:"emissions/average"}),"\u2011",(0,n.jsx)(t.code,{children:"carbon"}),"\u2011",(0,n.jsx)(t.code,{children:"intensity/batch"})]}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"GetEmissionsDataAsync(...)"})," or ",(0,n.jsx)(t.code,{children:"GetBestEmissionsDataAsync(...)"})," or ",(0,n.jsx)(t.code,{children:"GetAverageCarbonIntensityDataAsync(...)"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GetCurrentForecastAsync"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"emissions"}),"\u2011",(0,n.jsx)(t.code,{children:"forecasts"})]}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"forecasts/current"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"GetCurrentForecastAsync(...)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GetForecastByDateAsync"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"emissions"}),"\u2011",(0,n.jsx)(t.code,{children:"forecasts"})," \u2011\u2011",(0,n.jsx)(t.code,{children:"requested"}),"\u2011",(0,n.jsx)(t.code,{children:"at"})]}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"forecasts/batch"})," with ",(0,n.jsx)(t.code,{children:"requestedAt"})," field"]}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"GetForecastByDateAsync(...)"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"location-coverage",children:"Location Coverage"}),"\n",(0,n.jsx)(t.p,{children:"Different data sources provide both different features (as outlined above) but\nalso coverage of different geographic areas. It's important to note that each\ndata source may have different region names, which are handled through the\nlocation config."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.code,{children:"WattTime"}),", see their\n",(0,n.jsx)(t.a,{href:"https://www.watttime.org/explorer",children:"interactive coverage map"})," to find the\nrelevant zone."]}),"\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.code,{children:"ElectricityMaps"}),", see their\n",(0,n.jsx)(t.a,{href:"https://app.electricitymaps.com/map",children:"live map app"}),"\nto find the relevant zone and see current data coming in."]}),"\n",(0,n.jsxs)(t.li,{children:["For ",(0,n.jsx)(t.code,{children:"ElectricityMapsFree"}),", see the Electricity Maps\n",(0,n.jsx)(t.a,{href:"https://api.electricitymap.org/v3/zones",children:"zone list"})," to find the relevant\nzones."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"restrictions-free-trial-of-electricitymaps",children:"Restrictions: free trial of ElectricityMaps"}),"\n",(0,n.jsxs)(t.p,{children:["ElectricityMaps allows new users to create a free trial for 1 month access to\nthe API. Free trial users have restricted access to the API and a slightly\ndifferent configuration for the SDK (see\n",(0,n.jsx)(t.a,{href:"/docs/tutorial-extras/configuration#electricitymaps-configuration",children:"configuration.md"}),". You can\nrequest a free trial on the\n",(0,n.jsx)(t.a,{href:"https://api-portal.electricitymaps.com/",children:"ElectricityMaps API Portal"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"restricted-zone-access",children:"Restricted Zone Access"}),"\n",(0,n.jsxs)(t.p,{children:["Free trial users only have access ~100 zones in the ElectricityMaps API.\nElectricityMaps maintains a\n",(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/e/2PACX-1vTdYp8E5E3fNogL54ICf_UxfA_rZ_RPO4WKWI4ZANPSX25jCbvHtAxc-VrJt9HymeRHFcSGWXjhVHS0/pub",children:"frequently updated list"}),"\nof available free trial zones that include the key, name, and country of each\nzone. If you need access to other zones not included on the list, you will need\na full access product key."]}),"\n",(0,n.jsx)(t.h3,{id:"restricted-endpoint-access",children:"Restricted Endpoint Access"}),"\n",(0,n.jsx)(t.p,{children:"Free trial users only have access to seven endpoints in the ElectricityMaps API.\nOf those seven, only two are currently supported as part of Carbon Aware SDK:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"GET /carbon-intensity/forecast"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"GET /carbon-intensity/history"})}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: The Carbon Aware SDK is not restricting implementations to only support\nfree trial users of ElectricityMaps. There may be implementations in the\nfuture that use endpoints that a free trial user may not be able to access and\ntherefore cannot use that functionality of the SDK."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"restricted-call-access",children:"Restricted Call Access"}),"\n",(0,n.jsx)(t.p,{children:"Free trial users are capped at 1,000 calls for the month of the free trial. Any\ncalls beyond the 1,000th call will be rejected."})]})}function h(e={}){const{wrapper:t}={...(0,s.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>o});var n=r(6540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,c=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),x=o(r),u=s,j=x["".concat(l,".").concat(u)]||x[u]||d[u]||c;return r?n.createElement(j,i(i({ref:t},h),{},{components:r})):n.createElement(j,i({ref:t},h))}));h.displayName="MDXCreateElement"}}]);