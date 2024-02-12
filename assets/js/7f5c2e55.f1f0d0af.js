"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[3424],{2787:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=s(7624),t=s(5788);const a={},o="Carbon Aware CLI",r={id:"tutorial-basics/carbon-aware-cli",title:"Carbon Aware CLI",description:"The CLI is best for use with systems you can not change the code in but can",source:"@site/docs/tutorial-basics/carbon-aware-cli.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/carbon-aware-cli",permalink:"/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/carbon-aware-sdk/docs/category/tutorial---basics"},next:{title:"Carbon Aware Github Action",permalink:"/carbon-aware-sdk/docs/tutorial-basics/carbon-aware-github-action"}},l={},c=[{value:"Build and Install",id:"build-and-install",level:2},{value:"Using the CLI",id:"using-the-cli",level:2},{value:"emissions",id:"emissions",level:2},{value:"Description",id:"description",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Examples",id:"examples",level:3},{value:"Single Location Emissions",id:"single-location-emissions",level:4},{value:"Multiple Location Emissions",id:"multiple-location-emissions",level:4},{value:"Emissions with Start and End Times",id:"emissions-with-start-and-end-times",level:4},{value:"Best Emissions",id:"best-emissions",level:4},{value:"Average Emissions",id:"average-emissions",level:4},{value:"<code>emissions-forecasts</code>",id:"emissions-forecasts",level:2},{value:"Description",id:"description-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Single Location Current Forecast",id:"single-location-current-forecast",level:4},{value:"Multiple Location Current Forecasts",id:"multiple-location-current-forecasts",level:4},{value:"Filtered Data and Window Size Forecast",id:"filtered-data-and-window-size-forecast",level:4},{value:"Historical Forecast",id:"historical-forecast",level:4},{value:"Locations",id:"locations",level:5}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.MN)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"carbon-aware-cli",children:"Carbon Aware CLI"}),"\n",(0,i.jsx)(e.p,{children:"The CLI is best for use with systems you can not change the code in but can\ninvoke command line. For example - build pipelines."}),"\n",(0,i.jsxs)(e.p,{children:["The CLI exposes the primary ",(0,i.jsx)(e.code,{children:"getEmissionsByLocationsAndTime"})," SDK methods via\ncommand line and outputs the results as json to stdout."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"You can use the CLI via a docker image."}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#carbon-aware-cli",children:"Carbon Aware CLI"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#build-and-install",children:"Build and Install"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#using-the-cli",children:"Using the CLI"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#emissions",children:"emissions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#description",children:"Description"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#usage",children:"Usage"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#options",children:"Options"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#examples",children:"Examples"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#single-location-emissions",children:"Single Location Emissions"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#multiple-location-emissions",children:"Multiple Location Emissions"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#emissions-with-start-and-end-times",children:"Emissions with Start and End Times"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#emissions-forecasts",children:"emissions-forecasts"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#description",children:"Description"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#usage",children:"Usage"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#options",children:"Options"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#examples",children:"Examples"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#single-location-current-forecast",children:"Single Location Current Forecast"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#multiple-location-current-forecasts",children:"Multiple Location Current Forecasts"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#filtered-data-and-window-size-forecast",children:"Filtered Data and Window Size Forecast"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#historical-forecast",children:"Historical Forecast"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"build-and-install",children:"Build and Install"}),"\n",(0,i.jsxs)(e.p,{children:["Build the CLI using the ",(0,i.jsx)(e.code,{children:"dotnet publish"})," command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"dotnet publish ./src/CarbonAware.CLI/src/CarbonAware.CLI.csproj -c Release -o <your desired installation path>\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["By default this will build for your host operating system. To build for a\nplatform other than your host platform you can specify the target runtime like\nthis, using any valid\n",(0,i.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/rid-catalog#using-rids",children:"Runtime ID"}),"\n(EG ",(0,i.jsx)(e.code,{children:"win-x64"}),", ",(0,i.jsx)(e.code,{children:"linux-x64"}),", ",(0,i.jsx)(e.code,{children:"osx-x64"}),"):"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"dotnet publish .\\src\\CarbonAware.CLI\\src\\CarbonAware.CLI.csproj -c Release -r <RuntimeID> --self-contained -o <your desired installation path>\n"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"using-the-cli",children:"Using the CLI"}),"\n",(0,i.jsxs)(e.p,{children:["To use the CLI for the first time, navigate to your installation directory and\nrun the binary with the ",(0,i.jsx)(e.code,{children:"-h"})," flag to see the help menu."]}),"\n",(0,i.jsx)(e.p,{children:"On Windows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:".\\caw.exe -h\n"})}),"\n",(0,i.jsx)(e.p,{children:"On MacOS/Linux:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw -h\n"})}),"\n",(0,i.jsx)(e.h2,{id:"emissions",children:"emissions"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Retrieve emissions data from specified locations and time periods."}),"\n",(0,i.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"caw emissions [options]"})}),"\n",(0,i.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"  -l, --location <location> (REQUIRED)  A named location\n  -s, --start-time <startTime>          Start time of emissions data\n  -e, --end-time <endTime>              End time of emissions data\n  -b, --best                            Filter results down to the best (typically lowest) data point.\n  -a, --average                         Outputs the weighted average of all data points within the start and end time boundaries.\n  -?, -h, --help                        Show help and usage information\n"})}),"\n",(0,i.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h4,{id:"single-location-emissions",children:"Single Location Emissions"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:".\\caw.exe emissions -l eastus\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Location": "eastus",\n    "Time": "2022-08-30T12:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "eastus",\n    "Time": "2022-08-30T20:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  // ...\n  {\n    "Location": "eastus",\n    "Time": "2022-09-06T04:45:11+00:00",\n    "Rating": 73,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "eastus",\n    "Time": "2022-09-06T12:45:11+00:00",\n    "Rating": 84,\n    "Duration": "08:00:00"\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"multiple-location-emissions",children:"Multiple Location Emissions"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions -l eastus -l westus\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Location": "eastus",\n    "Time": "2022-08-30T12:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "eastus",\n    "Time": "2022-08-30T20:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  // ...\n  {\n    "Location": "westus",\n    "Time": "2022-09-06T04:45:11+00:00",\n    "Rating": 73,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "westus",\n    "Time": "2022-09-06T12:45:11+00:00",\n    "Rating": 84,\n    "Duration": "08:00:00"\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"emissions-with-start-and-end-times",children:"Emissions with Start and End Times"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions -l eastus --start-time 2022-07-01T00:00:00Z --end-time 2022-07-31T23:59:59Z --best\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Location": "eastus",\n    "Time": "2022-07-01T04:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "eastus",\n    "Time": "2022-07-01T12:45:11+00:00",\n    "Rating": 65,\n    "Duration": "08:00:00"\n  },\n  // ...\n  {\n    "Location": "eastus",\n    "Time": "2022-07-31T12:45:11+00:00",\n    "Rating": 73,\n    "Duration": "08:00:00"\n  },\n  {\n    "Location": "eastus",\n    "Time": "2022-07-31T20:45:11+00:00",\n    "Rating": 84,\n    "Duration": "08:00:00"\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"best-emissions",children:"Best Emissions"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions -l eastus -l westus --start-time 2022-07-01T00:00:00Z --end-time 2022-07-31T23:59:59Z --best\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Location": "eastus",\n    "Time": "2022-07-08T04:45:11+00:00",\n    "Rating": 48,\n    "Duration": "08:00:00"\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"average-emissions",children:"Average Emissions"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions -l eastus -l westus --start-time 2022-07-09T00:00:00Z --end-time 2022-07-09T12:00:00Z --average\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "Location": "eastus",\n    "Time": "2022-07-09T00:00:00+00:00",\n    "Rating": 79.357,\n    "Duration": "12:00:00"\n  },\n  {\n    "Location": "westus",\n    "Time": "2022-07-09T00:00:00+00:00",\n    "Rating": 86.91243,\n    "Duration": "12:00:00"\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h2,{id:"emissions-forecasts",children:(0,i.jsx)(e.code,{children:"emissions-forecasts"})}),"\n",(0,i.jsx)(e.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Forecasted emissions"}),"\n",(0,i.jsx)(e.h3,{id:"usage-1",children:"Usage"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"caw emissions-forecasts [options]"})}),"\n",(0,i.jsx)(e.h3,{id:"options-1",children:"Options"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"  -l, --location <location> (REQUIRED)  A list of locations\n  --data-start-at <startTime>           Filter out forecasted data points before start at time.\n  --data-end-at <endTime>               Filter out forecasted data points after end at time.\n  -w, --window-size <INT>                   The estimated duration (in minutes) of the workload being forecasted. Defaults to the duration of a single forecast data point\n  --requested-at                        Datetime of a previously generated forecast.  Returns the most current forecast if not provided.\n  -?, -h, --help                        Show help and usage information\n"})}),"\n",(0,i.jsx)(e.h3,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(e.h4,{id:"single-location-current-forecast",children:"Single Location Current Forecast"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions-forecasts -l northeurope\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[{\n  "requestedAt": "2022-07-19T13:37:49+00:00",\n  "generatedAt": "2022-07-19T13:35:00+00:00",\n  "location": "northeurope",\n  "dataStartAt": "2022-07-19T14:00:00Z",\n  "dataEndAt": "2022-07-20T04:38:00Z",\n  "windowSize": 5,\n  "optimalDataPoint": {\n    "location": "IE",\n    "timestamp": "2022-07-19T18:45:00+00:00",\n    "duration": 5,\n    "value": 448.4451043375\n  },\n  "forecastData": [\n    {\n      "location": "IE",\n      "timestamp": "2022-07-19T14:00:00+00:00",\n      "duration": 5,\n      "value": 532.02293146\n    },\n    ...\n    {\n      "location": "IE",\n      "timestamp": "2022-07-20T04:30:00+00:00",\n      "duration": 5,\n      "value": 535.7318741001667\n    }\n  ]\n}]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"multiple-location-current-forecasts",children:"Multiple Location Current Forecasts"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions-forecasts -l eastus -l westus\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "requestedAt": "2022-06-01T12:01:00+00:00"\n    "generatedAt": "2022-06-01T12:00:00+00:00",\n    "optimalDataPoint": {\n      "location": "PJM_ROANOKE",\n      "timestamp": "2022-06-01T16:45:00+00:00",\n      "duration": 5,\n      "value": 448.4451043375\n    },\n    "forecastData": [ ... ] // all relevant forecast data points\n    "location": "eastus",\n    "dataStartAt": "2022-06-01T14:05:00+00:00",\n    "dataEndAt": "2022-06-02T14:00:00+00:00",\n    "windowSize": 5,\n  },\n  {\n    "requestedAt": "2022-06-01T12:01:00+00:00"\n    "generatedAt": "2022-06-01T12:00:00+00:00",\n    "optimalDataPoint": {\n      "location": "CAISO_NORTH",\n      "timestamp": "2022-06-13T09:25:00+00:00",\n      "duration": 5,\n      "value": 328.178478\n    },\n    "forecastData": [ ... ] // all relevant forecast data points\n    "location": "westus",\n    "dataStartAt": "2022-06-01T14:05:00+00:00",\n    "dataEndAt": "2022-06-02T14:00:00+00:00",\n    "windowSize": 5,\n  }\n]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"filtered-data-and-window-size-forecast",children:"Filtered Data and Window Size Forecast"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Note: For current forecasts, since the data filters must fall within the\nforecasted data points, it is advisable to create them dynamically."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Example command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"TIME_TWO_HOURS_FROM_NOW=$(date --date='2 hours' --utc --iso-8601='seconds')\n\nTIME_NINETEEN_HOURS_FROM_NOW=$(date --date='19 hours' --utc --iso-8601='seconds')\n\n./caw emissions-forecasts -l northeurope -l westus --data-start-at TIME_TWO_HOURS_FROM_NOW --data-end-at TIME_NINETEEN_HOURS_FROM_NOW -w 10\n"})}),"\n",(0,i.jsx)(e.p,{children:"Example output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[{\n  "requestedAt": "2022-07-19T13:37:49+00:00",\n  "generatedAt": "2022-07-19T13:35:00+00:00",\n  "location": "northeurope",\n  "dataStartAt": "2022-07-19T15:37:49+00:00",\n  "dataEndAt": "2022-07-20T08:37:49+00:00",\n  "windowSize": 10,\n  "optimalDataPoint": {\n    "location": "IE",\n    "timestamp": "2022-07-19T18:45:00+00:00",\n    "duration": 10,\n    "value": 448.4451043375\n  },\n  "forecastData": [\n    {\n      "location": "IE",\n      "timestamp": "2022-07-19T15:40:00+00:00",\n      "duration": 10,\n      "value": 532.02293146\n    },\n    ...\n    {\n      "location": "IE",\n      "timestamp": "2022-07-20T08:30:00+00:00",\n      "duration": 10,\n      "value": 535.7318741001667\n    }\n  ]\n},\n{\n  "requestedAt": "2022-07-19T13:37:49+00:00",\n  "generatedAt": "2022-07-19T13:35:00+00:00",\n  "location": "westus",\n  "dataStartAt": "2022-07-19T15:37:49+00:00",\n  "dataEndAt": "2022-07-20T08:37:49+00:00",\n  "windowSize": 10,\n  "optimalDataPoint": {\n    "location": "CAISO_NORTH",\n    "timestamp": "2022-07-19T18:45:00+00:00",\n    "duration": 10,\n    "value": 502.02293146\n  },\n  "forecastData": [\n    {\n      "location": "CAISO_NORTH",\n      "timestamp": "2022-07-19T15:40:00+00:00",\n      "duration": 10,\n      "value": 612.9132146\n    },\n    ...\n    {\n      "location": "CAISO_NORTH",\n      "timestamp": "2022-07-20T08:30:00+00:00",\n      "duration": 10,\n      "value": 523.172030157\n    }\n  ]\n}]\n'})}),"\n",(0,i.jsx)(e.h4,{id:"historical-forecast",children:"Historical Forecast"}),"\n",(0,i.jsx)(e.p,{children:"command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./caw emissions-forecasts -l northeurope -l westus --requested-at 2022-06-15T18:31:00Z\n"})}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'[{\n  "requestedAt": "2022-06-15T18:31:00+00:00",\n  "generatedAt": "2022-06-15T18:30:00+00:00",\n  "location": "northeurope",\n  "dataStartAt": "2022-06-15T18:35:00+00:00",\n  "dataEndAt": "2022-06-16T18:30:00+00:00",\n  "windowSize": 5,\n  "optimalDataPoint": {\n    "location": "IE",\n    "timestamp": "2022-06-15T23:40:00+00:00",\n    "duration": 5,\n    "value": 448.4451043375\n  },\n  "forecastData": [\n    {\n      "location": "IE",\n      "timestamp": "2022-06-15T18:35:00+00:00",\n      "duration": 5,\n      "value": 532.02293146\n    },\n    ...\n    {\n      "location": "IE",\n      "timestamp": "2022-06-16T18:25:00+00:00",\n      "duration": 5,\n      "value": 535.7318741001667\n    }\n  ]\n},\n{\n  "requestedAt": "2022-06-15T18:31:00+00:00",\n  "generatedAt": "2022-06-15T18:30:00+00:00",\n  "location": "westus",\n  "dataStartAt": "2022-06-15T18:35:00+00:00",\n  "dataEndAt": "2022-06-16T18:30:00+00:00",\n  "windowSize": 5,\n  "optimalDataPoint": {\n    "location": "CAISO_NORTH",\n    "timestamp": "2022-06-15T23:40:00+00:00",\n    "duration": 5,\n    "value": 423.4451043375\n  },\n  "forecastData": [\n    {\n      "location": "CAISO_NORTH",\n      "timestamp": "2022-06-15T18:35:00+00:00",\n      "duration": 5,\n      "value": 482.02293146\n    },\n    ...\n    {\n      "location": "CAISO_NORTH",\n      "timestamp": "2022-06-16T18:25:00+00:00",\n      "duration": 5,\n      "value": 576.7318741008\n    }\n  ]\n}]\n'})}),"\n",(0,i.jsx)(e.h5,{id:"locations",children:"Locations"}),"\n",(0,i.jsxs)(e.p,{children:["command: ",(0,i.jsx)(e.code,{children:"./caw locations"})]}),"\n",(0,i.jsx)(e.p,{children:"output:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "eastus": {\n    "Latitude": 37.3719,\n    "Longitude": -79.8164,\n    "Name": "eastus"\n  },\n  ...\n  "switzerlandnorth":{\n    "Latitude": 47.451542,\n    "Longitude": 8.564572,\n    "Name": "switzerlandnorth"\n  },\n  ...\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.MN)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},5788:(n,e,s)=>{s.d(e,{MN:()=>c});var i=s(1504);function t(n,e,s){return e in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function a(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,i)}return s}function o(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){t(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}function r(n,e){if(null==n)return{};var s,i,t=function(n,e){if(null==n)return{};var s,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)s=a[i],e.indexOf(s)>=0||(t[s]=n[s]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)s=a[i],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(t[s]=n[s])}return t}var l=i.createContext({}),c=function(n){var e=i.useContext(l),s=e;return n&&(s="function"==typeof n?n(e):o(o({},e),n)),s},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var s=n.components,t=n.mdxType,a=n.originalType,l=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),h=c(s),m=t,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return s?i.createElement(p,o(o({ref:e},u),{},{components:s})):i.createElement(p,o({ref:e},u))}));u.displayName="MDXCreateElement"}}]);