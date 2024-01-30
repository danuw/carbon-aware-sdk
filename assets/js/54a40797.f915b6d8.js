"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[6798],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return t?a.createElement(m,o(o({ref:r},u),{},{components:t})):a.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},708:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=t(7462),n=(t(7294),t(3905));const i={},o="0013. Remove Aggregator layer from the Carbon Aware Architechture",c={unversionedId:"architecture/decisions/remove-aggregator-layer",id:"architecture/decisions/remove-aggregator-layer",title:"0013. Remove Aggregator layer from the Carbon Aware Architechture",description:"Status",source:"@site/docs/architecture/decisions/0013-remove-aggregator-layer.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/remove-aggregator-layer",permalink:"/carbon-aware-sdk/docs/architecture/decisions/remove-aggregator-layer",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0013-remove-aggregator-layer.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",permalink:"/carbon-aware-sdk/docs/architecture/decisions/electricity-maps-free"},next:{title:"0014. Dynamic Data Source Registration",permalink:"/carbon-aware-sdk/docs/architecture/decisions/dynamic-datasource-registration"}},s={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Sequence diagram",id:"sequence-diagram",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Green Impact",id:"green-impact",level:2}],u={toc:l},d="wrapper";function p(e){let{components:r,...i}=e;return(0,n.kt)(d,(0,a.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0013-remove-aggregator-layer-from-the-carbon-aware-architechture"},"0013. Remove Aggregator layer from the Carbon Aware Architechture"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Approved"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"The Carbon Aware SDK provides a public library to retrieve carbon emissions data. The library consists of public handler interfaces and data models that can be consumed by any consumer layer like WebAPI, CLI, Azure Functions etc.\nWith the inclusion of these handlers, the Aggregator layer has now become obsolete. It is has been replaced by the handlers, which are more aligned with the carbon intensity feature.\nThe current workflow in the repo looks like this- Consumer==>CA Library==>Aggregator==>Datasource. "),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"The proposal is to remove the Aggregator layer from the architechture, and make the Handlers act as the business layer between the consumer and the data source.\nGSF Library handlers will be responsible for taking in consumer requests, calling the specified data source, and performing any necessary logic before returning the result to the consumer.\nThe Consumer layer will call the public interfaces in the library, thereby defining clear access boundaries between the different layers. This will eliminate any references to the Aggregator layer and we can safely remove it from the SDK without changing the existing functionality.   "),(0,n.kt)("h2",{id:"sequence-diagram"},"Sequence diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WebApi Screenshot",src:t(5459).Z,width:"1300",height:"752"})),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clear access boundaries defined"),(0,n.kt)("li",{parentName:"ul"},"Less code to maintain"),(0,n.kt)("li",{parentName:"ul"},"Smaller size of packaged binary "),(0,n.kt)("li",{parentName:"ul"},"Clear separation of concerns between different layers")),(0,n.kt)("h2",{id:"green-impact"},"Green Impact"),(0,n.kt)("p",null,"Neutral"))}p.isMDXComponent=!0},5459:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/revised-end-end-tiers-d5e71ce73649f4c5632cd6b210a9bbbd.png"}}]);