"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[8053],{8910:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(4848),i=r(5680);const s={},a="0011. CD pipeline for release process",c={id:"architecture/decisions/cd-pipeline",title:"0011. CD pipeline for release process",description:"Status",source:"@site/docs/architecture/decisions/0011-cd-pipeline.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/cd-pipeline",permalink:"/docs/architecture/decisions/cd-pipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0011-cd-pipeline.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0010. Create packages for CarbonAware SDK",permalink:"/docs/architecture/decisions/sdk-packaging"},next:{title:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",permalink:"/docs/architecture/decisions/electricity-maps-free"}},o={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Green Impact",id:"green-impact",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0011-cd-pipeline-for-release-process",children:"0011. CD pipeline for release process"}),"\n",(0,t.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,t.jsx)(n.p,{children:"Accepted"}),"\n",(0,t.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,t.jsx)(n.p,{children:"Currently (v1.0 at least), Carbon Aware SDK does not ship any binaries include\nclient library even if release tag is set on GitHub. All of users who want to\nuse the SDK have to build binaries for themselves."}),"\n",(0,t.jsxs)(n.p,{children:["For example,\n",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/4eeca4cf95db755adecf8e4efe66d1a49c9a74b6/README.md",children:"README.md for Carbon Hack 22"}),"\nguides participants for Hackerthon can try Web API which is\n",(0,t.jsx)(n.a,{href:"https://carbon-aware-api.azurewebsites.net/swagger/index.html",children:"hosted on Azure"}),",\nthen we don't need to access all of sources of the SDK, however we have to\naccess SDK source to build client library."]}),"\n",(0,t.jsxs)(n.p,{children:["Carbon Aware SDK has client generator for some languages in\n",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/tree/bbbc5b89805f057142401be169664504f835bf95/src/clients",children:"src/clients"}),",\nand discusses to add .NET library as NuGet package in\n",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/docs/architecture/decisions/0009-sdk-as-a-c%23-client-library.md",children:"ADR-0009"}),".\nIt is very useful for all SDK users / developers if both WebAPI and client\nlibraries are shipped as binaries."]}),"\n",(0,t.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,t.jsx)(n.p,{children:"Ships both WebAPI container and client libraries when new release happens."}),"\n",(0,t.jsxs)(n.p,{children:["Fortunately, we can use\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages",children:"GitHub Packages"}),"\nfor this purpose, and we can integrate it with\n",(0,t.jsxs)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release",children:[(0,t.jsx)(n.code,{children:"release"})," event on GitHub Actions"]}),"\n(GHA)."]}),"\n",(0,t.jsx)(n.p,{children:"In our case, we can ship following binaries via GitHub Packages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WebAPI container"}),"\n",(0,t.jsxs)(n.li,{children:["Client libraries","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:".NET"}),"\n",(0,t.jsx)(n.li,{children:"Java"}),"\n",(0,t.jsx)(n.li,{children:"JavaScript"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This ADR aims to ship them when new release happens automatically."}),"\n",(0,t.jsx)(n.p,{children:"Environment-specific problems are unlikely to happen. All of release binaries\nwill be built on GHA, and we can QA in its workflows. If some problems happen,\nwe will investigate source code and/or GHA workflows."}),"\n",(0,t.jsx)(n.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,t.jsx)(n.p,{children:"Neutral"}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/discussions/46",children:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/discussions/46"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/features/packages",children:"GitHub Packages"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/features/actions",children:"GitHub Actions"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5680:(e,n,r)=>{r.d(n,{RP:()=>l});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),l=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return r?t.createElement(b,a(a({ref:n},h),{},{components:r})):t.createElement(b,a({ref:n},h))}));h.displayName="MDXCreateElement"}}]);