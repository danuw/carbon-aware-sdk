"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[224],{9756:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(7624),o=i(5788);const s={sidebar_position:3},r="Setting up and using the Carbon Aware SDK",a={id:"quickstart",title:"Setting up and using the Carbon Aware SDK",description:"This guide will provide you with knowledge and examples necessary to use the",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Carbon Aware SDK adopters",permalink:"/docs/overview/adopters"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},c={},l=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Setting up the CLI",id:"setting-up-the-cli",level:3},{value:"Calling the SDK via CLI",id:"calling-the-sdk-via-cli",level:3},{value:"Using the Web API",id:"using-the-web-api",level:2},{value:"Setting up the Web API",id:"setting-up-the-web-api",level:3},{value:"Calling the Web API via command line",id:"calling-the-web-api-via-command-line",level:3},{value:"Calling the <code>/emissions/bylocation</code> endpoint",id:"calling-the-emissionsbylocation-endpoint",level:4},{value:"Calling the <code>/emissions/bylocations/best</code> endpoint",id:"calling-the-emissionsbylocationsbest-endpoint",level:4},{value:"Calling the Web API via client libraries",id:"calling-the-web-api-via-client-libraries",level:3},{value:"Client generation",id:"client-generation",level:4},{value:"Python Client installation + example usage",id:"python-client-installation--example-usage",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setting-up-and-using-the-carbon-aware-sdk",children:"Setting up and using the Carbon Aware SDK"}),"\n",(0,t.jsx)(n.p,{children:"This guide will provide you with knowledge and examples necessary to use the\nSDK, either as a CLI, by directly calling the Web API endpoints or by using\ngenerated libraries for your language of choice!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-the-cli",children:"using the cli"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-the-web-api",children:"using the web api"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-the-cli",children:"Setting up the CLI"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:".NET Core 6.0"}),"\n",(0,t.jsxs)(n.li,{children:["Alternatively:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker"}),"\n",(0,t.jsx)(n.li,{children:"VSCode (it is recommended to work in a Dev Container)"}),"\n",(0,t.jsxs)(n.li,{children:["Remote Containers extension for VSCode:\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The CLI can either be run locally with ",(0,t.jsx)(n.code,{children:"dotnet"})," or in a container, e.g. using\nVSCode Remote Containers (Dev Container). To run locally:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure you have the repository cloned:\n",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git",children:"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change directory to: ",(0,t.jsx)(n.code,{children:"cd carbon-aware-sdk/src/CarbonAware.CLI/src"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you have a WattTime account registered (or other data source) - you will\nneed to configure the application to use them. By default the SDK will use a\npre-generated JSON file with random data. This random data is meant to make\nit easier to get started with the SDK and doesn't represent actual Carbon\ndata. To configure the application, you will need to set up specific\nenvironment variables or modify ",(0,t.jsx)(n.code,{children:"appsettings.json"})," inside of\n",(0,t.jsx)(n.code,{children:"src/CarbonAware.WebApi/src"})," directory. Detailed information on configuration\ncan be found in the ",(0,t.jsx)(n.a,{href:"/docs/overview/",children:"overview.md"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, you can follow an example configuration below (export these\nenvironment variables in the Terminal):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export DataSources__EmissionsDataSource="WattTime"\nexport DataSources__ForecastDataSource="WattTime"\nexport DataSources__Configurations__WattTime__Type="WattTime"\nexport DataSources__Configurations__WattTime__username="<YOUR_WATTTIME_USERNAME>"\nexport DataSources__Configurations__WattTime__password="<YOUR_WATTTIME_PASSWORD>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export DataSources__ForecastDataSource="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token"\nexport DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' export DataSources__EmissionsDataSource="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__token="<CO2SIGNAL_TOKEN>"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the CLI using ",(0,t.jsx)(n.code,{children:"dotnet run"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The CLI will ask you to at minimum provide a ",(0,t.jsx)(n.code,{children:"--location (-l)"})," parameter."]}),"\n",(0,t.jsx)(n.h3,{id:"calling-the-sdk-via-cli",children:"Calling the SDK via CLI"}),"\n",(0,t.jsxs)(n.p,{children:["To run the CLI, simply call ",(0,t.jsx)(n.code,{children:"dotnet run"})," and provide it with any parameters. If\nyou fail to pass any parameters, a help screen will be printed out with possible\nparameters and short explanations."]}),"\n",(0,t.jsxs)(n.p,{children:["To get a list of all locations supported, you can use the Locations API,\nreferenced in ",(0,t.jsx)(n.code,{children:"src/CarbonAware.CLI/src/Commands/Location"}),"\nand the command ",(0,t.jsx)(n.code,{children:".\\caw locations"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Expected output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n  "eastus": {\n    "Latitude": 37.3719,\n    "Longitude": -79.8164,\n    "Name": "eastus"\n  },\n  ...\n  "switzerlandnorth":{\n    "Latitude": 47.451542,\n    "Longitude": 8.564572,\n    "Name": "switzerlandnorth"\n  },\n  ...\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For example, to get emissions in the ",(0,t.jsx)(n.code,{children:"eastus"})," and ",(0,t.jsx)(n.code,{children:"uksouth"})," region between\n",(0,t.jsx)(n.code,{children:"2022-08-23 at 11:15am"})," and ",(0,t.jsx)(n.code,{children:"2022-08-23 at 11:20am"}),", run:\n",(0,t.jsx)(n.code,{children:"dotnet run emissions -l eastus,uksouth -s 2022-08-23T11:15 -e 2022-08-23T11:20"})]}),"\n",(0,t.jsx)(n.p,{children:"Expected output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'[\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:20:00+00:00",\n    "Rating": 567.44405487,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:15:00+00:00",\n    "Rating": 564.72250065,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "PJM_ROANOKE",\n    "Time": "2022-08-23T11:10:00+00:00",\n    "Rating": 564.72250065,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:20:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:15:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  },\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T11:10:00+00:00",\n    "Rating": 422.74808884000004,\n    "Duration": "00:05:00"\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To get the best time and location from a list of locations and a specified time\nwindow, use the ",(0,t.jsx)(n.code,{children:"--best"})," flag. E.g. to get the best time and location in a 24\nhour window on the 23rd of August in the regions: ",(0,t.jsx)(n.code,{children:"eastus"}),", ",(0,t.jsx)(n.code,{children:"westus"}),",\n",(0,t.jsx)(n.code,{children:"westus3"}),",",(0,t.jsx)(n.code,{children:"uksouth"}),", run the command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet run emissions -l eastus,westus,westus3,uksouth -s 2022-08-23T00:00 -e 2022-08-23T23:59 --best\n"})}),"\n",(0,t.jsx)(n.p,{children:"Expected output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'[\n  {\n    "Location": "UK",\n    "Time": "2022-08-23T08:50:00+00:00",\n    "Rating": 384.64632976,\n    "Duration": "00:05:00"\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-the-web-api",children:"Using the Web API"}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-the-web-api",children:"Setting up the Web API"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker Desktop/CLI"}),"\n",(0,t.jsx)(n.li,{children:"VSCode (it is recommended to work in a Dev Container)"}),"\n",(0,t.jsxs)(n.li,{children:["Remote Containers extension for VSCode:\n",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["First we need to set up the GitHub repository\n(",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git",children:"https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"}),"):"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/Green-Software-Foundation/carbon-aware-sdk.git"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change directory into the repository: ",(0,t.jsx)(n.code,{children:"cd carbon-aware-sdk"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open VSCode: ",(0,t.jsx)(n.code,{children:"code ."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open VSCode Command Palette: (Linux/Windows: ",(0,t.jsx)(n.code,{children:"ctrl + shift + P"}),", MacOS:\n",(0,t.jsx)(n.code,{children:"cmd + shift + P"}),"), and run the command:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Remote-Containers: Open Folder in Container"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you have a WattTime account registered (or other data source) - you will\nneed to configure the application to use them. By default the SDK will use a\npre-generated JSON file with random data. To configure the application, you\nwill need to set up specific environment variables or modify\n",(0,t.jsx)(n.code,{children:"appsettings.json"})," inside of ",(0,t.jsx)(n.code,{children:"src/CarbonAware.WebApi/src"})," directory. Detailed\ninformation on configuration can be found in the ",(0,t.jsx)(n.a,{href:"/docs/overview/",children:"overview.md"}),"\nfile."]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, you can follow an example configuration below (export these\nenvironment variables in the Terminal):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export DataSources__EmissionsDataSource="WattTime"\nexport DataSources__ForecastDataSource="WattTime"\nexport DataSources__Configurations__WattTime__Type="WattTime"\nexport DataSources__Configurations__WattTime__username="<YOUR_WATTTIME_USERNAME>"\nexport DataSources__Configurations__WattTime__password="<YOUR_WATTTIME_PASSWORD>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export DataSources__ForecastDataSource="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps"\nexport DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token"\nexport DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' export DataSources__EmissionsDataSource="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree"\n export DataSources__Configurations__ElectricityMapsFree__token="<CO2SIGNAL_TOKEN>"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the VSCode Terminal:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change directory to: ",(0,t.jsx)(n.code,{children:"cd src/CarbonAware.WebApi/src"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["And run the application using: ",(0,t.jsx)(n.code,{children:"dotnet run"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["By default, it will be hosted on ",(0,t.jsx)(n.code,{children:"localhost:5073"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"calling-the-web-api-via-command-line",children:"Calling the Web API via command line"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl"})," or other tool that allows making HTTP requests (e.g. ",(0,t.jsx)(n.code,{children:"wget"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Recommended: ",(0,t.jsx)(n.code,{children:"jq"})," for parsing JSON output: ",(0,t.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"https://stedolan.github.io/jq/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["With the API running on ",(0,t.jsx)(n.code,{children:"localhost:5073"}),", we can make HTTP requests to its\nendpoints, full endpoint description can be found here:\n",(0,t.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/src/CarbonAware.WebApi/src/README.md",children:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/src/CarbonAware.WebApi/src/README.md"})]}),"\n",(0,t.jsxs)(n.p,{children:["To get a list of all locations supported, you can use the Locations API endpoint\n",(0,t.jsx)(n.code,{children:"/locations"})," referenced in\n",(0,t.jsx)(n.code,{children:"src/CarbonAware.WebApi/src/Controllers/LocationsController.cs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Expected Output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n  "eastus": {\n    "Latitude": 37.3719,\n    "Longitude": -79.8164,\n    "Name": "eastus"\n  },\n  ...\n  "switzerlandnorth":{\n    "Latitude": 47.451542,\n    "Longitude": 8.564572,\n    "Name": "switzerlandnorth"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"calling-the-emissionsbylocation-endpoint",children:["Calling the ",(0,t.jsx)(n.code,{children:"/emissions/bylocation"})," endpoint"]}),"\n",(0,t.jsx)(n.p,{children:"In console, we can run the below command, to request data for a single location\n(currently Azure region names supported) in a particular timeframe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:5073/emissions/bylocation?location=westus&time=2022-08-23T14%3A00&toTime=2022-08-23T14%3A30" | jq\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can omit the ",(0,t.jsx)(n.code,{children:"| jq"})," to get the JSON data raw and unparsed. This is a request\nfor data in the ",(0,t.jsx)(n.code,{children:"westus"})," region from the date ",(0,t.jsx)(n.code,{children:"2022-08-23 at 14:00"})," to\n",(0,t.jsx)(n.code,{children:"2022-08-23 at 14:30"}),". (Note: semicolons ",(0,t.jsx)(n.code,{children:":"})," are encoded as ",(0,t.jsx)(n.code,{children:"%3A"})," in URLs)."]}),"\n",(0,t.jsx)(n.p,{children:"The sample data output should be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'[\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:30:00+00:00",\n    "rating": 439.07741416000005,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:25:00+00:00",\n    "rating": 438.62382179,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:20:00+00:00",\n    "rating": 438.62382179,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:15:00+00:00",\n    "rating": 439.53100653,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:10:00+00:00",\n    "rating": 439.98459890000004,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:05:00+00:00",\n    "rating": 456.31392422000005,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T14:00:00+00:00",\n    "rating": 439.98459890000004,\n    "duration": "00:05:00"\n  },\n  {\n    "location": "CAISO_NORTH",\n    "time": "2022-08-23T13:55:00+00:00",\n    "rating": 445.42770734000004,\n    "duration": "00:05:00"\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"calling-the-emissionsbylocationsbest-endpoint",children:["Calling the ",(0,t.jsx)(n.code,{children:"/emissions/bylocations/best"})," endpoint"]}),"\n",(0,t.jsx)(n.p,{children:"This endpoint, unlike the previous one, accepts a list of locations and outputs\na single time and location with the LOWEST Carbon Intensity index."}),"\n",(0,t.jsx)(n.p,{children:"In console, we can run the below command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl "http://localhost:5073/emissions/bylocations/best?location=westus&location=eastus&location=westus3&time=2022-08-23T00%3A00&toTime=2022-08-23T23%3A59" | jq\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can omit the ",(0,t.jsx)(n.code,{children:"| jq"})," to get the JSON data raw and unparsed. This is a request\nfor the best location and time out of the locations: ",(0,t.jsx)(n.code,{children:"westus"}),", ",(0,t.jsx)(n.code,{children:"eastus"}),",\n",(0,t.jsx)(n.code,{children:"westus3"})," in the time window from ",(0,t.jsx)(n.code,{children:"2022-08-23 at 00:00"})," to ",(0,t.jsx)(n.code,{children:"2022-08-23 at 23:59"})]}),"\n",(0,t.jsx)(n.p,{children:"The sample data output should be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n  "location": "AZPS",\n  "time": "2022-08-23T08:05:00+00:00",\n  "rating": 398.70769323,\n  "duration": "00:05:00"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"calling-the-web-api-via-client-libraries",children:"Calling the Web API via client libraries"}),"\n",(0,t.jsxs)(n.p,{children:["The SDK can work with libraries for up to 50 languages generated with the\n",(0,t.jsx)(n.a,{href:"https://openapi-generator.tech/",children:"Open API Generator (Swagger)"}),". This guide will\nprovide a tutorial to generating clients for java, Python, JavaScript, .NET and\nGoLang. There is also a walkthrough of an example Python script interacting with\nthe SDK."]}),"\n",(0,t.jsx)(n.h4,{id:"client-generation",children:"Client generation"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker"}),"\n",(0,t.jsx)(n.li,{children:"Web API running (locally or hosted online)"}),"\n",(0,t.jsxs)(n.li,{children:["(Optionally) ",(0,t.jsx)(n.code,{children:"openapi-generator-cli"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The clients can be generated either by hand with the openapi-generator CLI, or\nby running shell scripts which also call these generators. The easiest way to\ngenerate them after using the Web API, is to do it Terminal ",(0,t.jsx)(n.strong,{children:"while"})," the Web\nAPI is running."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In Terminal: Change into directory ",(0,t.jsx)(n.code,{children:"carbon-aware-sdk/src/clients"})]}),"\n",(0,t.jsxs)(n.li,{children:["Run the client generation script, passing the API URL (omitting the initial\n",(0,t.jsx)(n.code,{children:"http://"}),"): ",(0,t.jsx)(n.code,{children:"./docker-generate-clients.sh host.docker.internal:5073"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If your API is available at a different URL/Port, replace\n",(0,t.jsx)(n.code,{children:"host.docker.internal:5073"})," with that url."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You should now see multiple generated clients in that directory (check with\n",(0,t.jsx)(n.code,{children:"ls"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There is an alternative script for generating the tests - ",(0,t.jsx)(n.code,{children:"generate-clients.sh"}),"\nwhich can be ran if you have the ",(0,t.jsx)(n.code,{children:"openapi-generator-cli"})," installed locally."]}),"\n",(0,t.jsx)(n.h4,{id:"python-client-installation--example-usage",children:"Python Client installation + example usage"}),"\n",(0,t.jsxs)(n.p,{children:["After generating the clients, we can now install them. Most generated clients\n(with OpenAPI) should have a ",(0,t.jsx)(n.code,{children:"README"})," file containing instructions on\ninstallation and example usage."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Change directory to ",(0,t.jsx)(n.code,{children:"cd carbon-aware-sdk/src/clients/python"}),". This is the\ngenerated Python client"]}),"\n",(0,t.jsxs)(n.li,{children:["Install the requirements using ",(0,t.jsx)(n.code,{children:"pip install -r requirements.txt"})]}),"\n",(0,t.jsxs)(n.li,{children:["Install the Python client library using\n",(0,t.jsx)(n.a,{href:"http://pypi.python.org/pypi/setuptools",children:(0,t.jsx)(n.code,{children:"setuptools"})}),"):\n",(0,t.jsx)(n.code,{children:"python setup.py install --user"})]}),"\n",(0,t.jsx)(n.li,{children:"The library is now succesfully installed!"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There should be an example script in the ",(0,t.jsx)(n.code,{children:"README"})," file, but this guide suggests\ntrying the following example first:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Python",children:'import time\nimport openapi_client\nfrom pprint import pprint\nfrom openapi_client.api import carbon_aware_api\nfrom openapi_client.model.emissions_data import EmissionsData\nfrom  dateutil.parser import parse\n# Defining the host is optional and defaults to http://localhost\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = openapi_client.Configuration(\n        host = "http://localhost:5073"\n)\n# Enter a context with an instance of the API client\nwith openapi_client.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = carbon_aware_api.CarbonAwareApi(api_client)\n    location = "westus" # str |  (optional)\n    time = parse(\'2022-07-22T10:30:00.00Z\') # datetime |  (optional)\n    to_time = parse(\'2022-07-22T11:00:00.00Z\') # datetime |  (optional)\n    duration_minutes = 0 # int |  (optional) (default to 0)\n    try:\n        api_response = api_instance.get_emissions_data_for_location_by_time(location=location, time=time, to_time=to_time, duration_minutes=duration_minutes)\n        pprint(api_response)\n    except openapi_client.ApiException as e:\n        print("Exception when calling CarbonAwareApi->emissions_bylocation_get: %s\\n" % e)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we import the ",(0,t.jsx)(n.code,{children:"openapi_client"})," along with other modules generated by the\nAPI. We create a default configuration pointing to Web API at ",(0,t.jsx)(n.code,{children:"localhost:5073"}),",\nchange it to a different URL if your API is deployed at a different URL/port.\nThis line of code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Python",children:"        api_response = api_instance.get_emissions_data_for_location_by_time(location=location, time=time, to_time=to_time, duration_minutes=duration_minutes)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Calls the Python Client to send a request to the Carbon Aware SDK Web API, for\nthe ",(0,t.jsx)(n.code,{children:"/emissions/bylocation"})," endpoint, similarly to what's shown above, when\npolling the API directly with HTTP requests. This is an example request for the\n",(0,t.jsx)(n.code,{children:"westus"})," region, in the time window from ",(0,t.jsx)(n.code,{children:"2022-07-22 at 10:30am"})," to\n",(0,t.jsx)(n.code,{children:"2022-07-22 at 11:00am"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.MN)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5788:(e,n,i)=>{i.d(n,{MN:()=>l});var t=i(1504);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=l(i),p=o,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return i?t.createElement(m,r(r({ref:n},h),{},{components:i})):t.createElement(m,r({ref:n},h))}));h.displayName="MDXCreateElement"}}]);