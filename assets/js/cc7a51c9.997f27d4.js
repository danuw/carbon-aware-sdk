"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[2808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="6. Data Source Registration",s={unversionedId:"architecture/decisions/data-source-registration",id:"architecture/decisions/data-source-registration",title:"6. Data Source Registration",description:"Status",source:"@site/docs/architecture/decisions/0006-data-source-registration.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/data-source-registration",permalink:"/carbon-aware-sdk/docs/architecture/decisions/data-source-registration",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0006-data-source-registration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5. WebAPI to use IAsyncEnumerable to stream potentially large responses",permalink:"/carbon-aware-sdk/docs/architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter"},next:{title:"7. Data Source Interfaces",permalink:"/carbon-aware-sdk/docs/architecture/decisions/data-source-interfaces"}},c={},l=[{value:"Status",id:"status",level:2},{value:"Date",id:"date",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Usability",id:"usability",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Example",id:"example",level:4},{value:"Green Impact",id:"green-impact",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"6-data-source-registration"},"6. Data Source Registration"),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"date"},"Date"),(0,r.kt)("p",null,"2022-11-1"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Currently, data sources must be hardcoded into a separate\n",(0,r.kt)("inlineCode",{parentName:"p"},"CarbonAware.DataSources.Registration")," project to be configured with the\nexisting dependency injection methods. This means that data source developers\nmust plumb their code across multiple projects. It forces external developers\nwho want to use the SDK as-is, but with a custom data source, to copy and modify\nthe entire codebase to wire in their custom data source. Finally, it adds\nunnecessary bloat by requiring every possible data source to be included in all\nrelease builds."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"Consumers declare which data sources they want to include in the project's\n.csproj file. Operators can reference them via the configuration and they will\nbe set up."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("h3",{id:"usability"},"Usability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data source developers within this project can make a full contribution\nwithout knowledge of other projects."),(0,r.kt)("li",{parentName:"ul"},"External developers still need to copy the project to access the interfaces,\nbut similarly require less knowledge to create, and this paves the way for\nfuture enhancements if components are released as public packages."),(0,r.kt)("li",{parentName:"ul"},"Composable data sources reduces build times and artifact sizes.")),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"A single ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceCollectionExtension")," class extension can be provided to use the\nconfiguration & assembly to discover classes which implement data source\ninterfaces. This approach to using\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tutorials/creating-app-with-plugin-support"},"pluggable interfaces"),"\nfollows existing .NET best practices."),(0,r.kt)("p",null,"The classes would be responsible for their own configuration and dependencies.\nThis means that configuration logic would need to move from its existing\n",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceCollectionExtensions")," location to a static class on the data source."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Get the config\nvar config = configuration\n    .GetSection(CarbonAwareVariablesConfiguration.Key)\n    .Get<CarbonAwareVariablesConfiguration>();\n\n// Load the assembly for the configured 'CarbonIntensityDataSource'.\n// EG 'WattTime'\nvar assembly = Assembly.Load($\"CarbonAware.DataSources.{config.CarbonIntensityDataSource}\");\n\n// Get the classes in the CarbonAware.DataSources.WattTime project\n// that implement the ICarbonIntensityDataSource interface.\n// Pick the first, because we only expect one right now.\nvar carbonIntensityDataSourceType = assembly.GetTypes()\n    .Where(type => typeof(ICarbonIntensityDataSource).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)\n    .First();\n\n// Call static configuration method on the data source to allow it\n// to configure itself and its dependencies.\nMethodInfo configureMethod = typeof(carbonIntensityDataSourceType).GetMethod(\n    \"ConfigureDI\",\n    BindingFlags.Static | BindingFlags.Public\n);\nconfigureMethod.Invoke(null, services, configuration);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class WattTimeDataSource : ICarbonAwareDataSource\n{\n  public static ConfigureDI(IServiceCollection services, IConfiguration configuration)\n  {\n    services.ConfigureWattTimeClient(configuration);\n    services.TryAddSingleton<ICarbonIntensityDataSource, WattTimeDataSource>();\n    services.TryAddSingleton<ILocationSource, AzureLocationSource>();\n  }\n  // ...\n}\n")),(0,r.kt)("h2",{id:"green-impact"},"Green Impact"),(0,r.kt)("p",null,"Positive"),(0,r.kt)("p",null,"By reducing the size of releases, less energy is required to store and\n",(0,r.kt)("a",{parentName:"p",href:"https://patterns.greensoftware.foundation/catalog/cloud/reduce-transmitted-data"},"transmit"),"\nthe data throughout the rest of the SDLC journey."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jussihaapanen.com/posts/dotnet-core-plugin-dependency-injection/"},"Plugins with DI")))}p.isMDXComponent=!0}}]);