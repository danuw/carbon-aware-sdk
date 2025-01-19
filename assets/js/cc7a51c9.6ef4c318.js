"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[3491],{8284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const a={},o="6. Data Source Registration",r={id:"architecture/decisions/data-source-registration",title:"6. Data Source Registration",description:"Status",source:"@site/docs/architecture/decisions/0006-data-source-registration.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/data-source-registration",permalink:"/docs/architecture/decisions/data-source-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0006-data-source-registration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5. WebAPI to use IAsyncEnumerable to stream potentially large responses",permalink:"/docs/architecture/decisions/IAsyncEnumerable-HttpResponseExceptionFilter"},next:{title:"7. Data Source Interfaces",permalink:"/docs/architecture/decisions/data-source-interfaces"}},c={},l=[{value:"Status",id:"status",level:2},{value:"Date",id:"date",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Usability",id:"usability",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Example",id:"example",level:4},{value:"Green Impact",id:"green-impact",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"6-data-source-registration",children:"6. Data Source Registration"})}),"\n",(0,i.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(t.p,{children:"Accepted"}),"\n",(0,i.jsx)(t.h2,{id:"date",children:"Date"}),"\n",(0,i.jsx)(t.p,{children:"2022-11-1"}),"\n",(0,i.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, data sources must be hardcoded into a separate\n",(0,i.jsx)(t.code,{children:"CarbonAware.DataSources.Registration"})," project to be configured with the\nexisting dependency injection methods. This means that data source developers\nmust plumb their code across multiple projects. It forces external developers\nwho want to use the SDK as-is, but with a custom data source, to copy and modify\nthe entire codebase to wire in their custom data source. Finally, it adds\nunnecessary bloat by requiring every possible data source to be included in all\nrelease builds."]}),"\n",(0,i.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,i.jsx)(t.p,{children:"Consumers declare which data sources they want to include in the project's\n.csproj file. Operators can reference them via the configuration and they will\nbe set up."}),"\n",(0,i.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,i.jsx)(t.h3,{id:"usability",children:"Usability"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Data source developers within this project can make a full contribution\nwithout knowledge of other projects."}),"\n",(0,i.jsx)(t.li,{children:"External developers still need to copy the project to access the interfaces,\nbut similarly require less knowledge to create, and this paves the way for\nfuture enhancements if components are released as public packages."}),"\n",(0,i.jsx)(t.li,{children:"Composable data sources reduces build times and artifact sizes."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(t.p,{children:["A single ",(0,i.jsx)(t.code,{children:"ServiceCollectionExtension"})," class extension can be provided to use the\nconfiguration & assembly to discover classes which implement data source\ninterfaces. This approach to using\n",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/tutorials/creating-app-with-plugin-support",children:"pluggable interfaces"}),"\nfollows existing .NET best practices."]}),"\n",(0,i.jsxs)(t.p,{children:["The classes would be responsible for their own configuration and dependencies.\nThis means that configuration logic would need to move from its existing\n",(0,i.jsx)(t.code,{children:"ServiceCollectionExtensions"})," location to a static class on the data source."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"// Get the config\nvar config = configuration\n    .GetSection(CarbonAwareVariablesConfiguration.Key)\n    .Get<CarbonAwareVariablesConfiguration>();\n\n// Load the assembly for the configured 'CarbonIntensityDataSource'.\n// EG 'WattTime'\nvar assembly = Assembly.Load($\"CarbonAware.DataSources.{config.CarbonIntensityDataSource}\");\n\n// Get the classes in the CarbonAware.DataSources.WattTime project\n// that implement the ICarbonIntensityDataSource interface.\n// Pick the first, because we only expect one right now.\nvar carbonIntensityDataSourceType = assembly.GetTypes()\n    .Where(type => typeof(ICarbonIntensityDataSource).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)\n    .First();\n\n// Call static configuration method on the data source to allow it\n// to configure itself and its dependencies.\nMethodInfo configureMethod = typeof(carbonIntensityDataSourceType).GetMethod(\n    \"ConfigureDI\",\n    BindingFlags.Static | BindingFlags.Public\n);\nconfigureMethod.Invoke(null, services, configuration);\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"public class WattTimeDataSource : ICarbonAwareDataSource\n{\n  public static ConfigureDI(IServiceCollection services, IConfiguration configuration)\n  {\n    services.ConfigureWattTimeClient(configuration);\n    services.TryAddSingleton<ICarbonIntensityDataSource, WattTimeDataSource>();\n    services.TryAddSingleton<ILocationSource, AzureLocationSource>();\n  }\n  // ...\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,i.jsx)(t.p,{children:"Positive"}),"\n",(0,i.jsxs)(t.p,{children:["By reducing the size of releases, less energy is required to store and\n",(0,i.jsx)(t.a,{href:"https://patterns.greensoftware.foundation/catalog/cloud/reduce-transmitted-data",children:"transmit"}),"\nthe data throughout the rest of the SDLC journey."]}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://jussihaapanen.com/posts/dotnet-core-plugin-dependency-injection/",children:"Plugins with DI"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);