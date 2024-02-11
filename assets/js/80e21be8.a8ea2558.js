"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[4549],{5623:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release-v1.2","metadata":{"permalink":"/carbon-aware-sdk/blog/release-v1.2","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-01-14-release-1.2.mdx","source":"@site/blog/2024-01-14-release-1.2.mdx","title":"Release v1.2","description":"Release 1.2","date":"2024-01-14T00:00:00.000Z","formattedDate":"January 14, 2024","tags":[{"label":"v1.2","permalink":"/carbon-aware-sdk/blog/tags/v-1-2"},{"label":"release","permalink":"/carbon-aware-sdk/blog/tags/release"}],"readingTime":0.455,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.2","title":"Release v1.2","tags":["v1.2","release"]},"nextItem":{"title":"Release v1.1","permalink":"/carbon-aware-sdk/blog/release-v1.1"}},"content":"Release 1.2\\n\\n## [1.2.0] - 2024-01\\n\\n### Added \\n\\n- [#381 Add Helm chart and workflow](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/381)\\n- New package release for Helm charts available at https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/charts%2Fcarbon-aware-sdk\\n\\n### Fixed\\n\\n- [#232 Generating SDK client does not work on linux](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232)\\n- [#393 Fix: verify-azure-function-with-packages](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/393)\\n- [#391 fixing 3 broken links in overview.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/391)\\n- [#389 EMFree data source should regard specified time range](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/389)\\n\\n### Changed\\n\\n- [#425 Updating CONTRIBUTING.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/425)\\n\\n#### API\\n\\n- \\n\\n#### API Deployment\\n\\n- \\n\\n#### SDK \\n\\n- \\n\\n\\n#### Other\\n\\n- Improved process leveraging the project boards at https://github.com/orgs/Green-Software-Foundation/projects/15/views/2\\n\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues?q=label%3Av1.2+is%3Aclosed+)"},{"id":"release-v1.1","metadata":{"permalink":"/carbon-aware-sdk/blog/release-v1.1","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2023-07-18-release-1.1.mdx","source":"@site/blog/2023-07-18-release-1.1.mdx","title":"Release v1.1","description":"Release 1.1","date":"2023-07-18T00:00:00.000Z","formattedDate":"July 18, 2023","tags":[{"label":"v1.1","permalink":"/carbon-aware-sdk/blog/tags/v-1-1"},{"label":"release","permalink":"/carbon-aware-sdk/blog/tags/release"}],"readingTime":2.37,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.1","title":"Release v1.1","tags":["v1.1","release"]},"prevItem":{"title":"Release v1.2","permalink":"/carbon-aware-sdk/blog/release-v1.2"},"nextItem":{"title":"Release v1.1","permalink":"/carbon-aware-sdk/blog/release-v1.1"}},"content":"Release 1.1\\n\\n\\n\\n## [1.1.0] - 2023-18-07\\n\\n### Added \\n\\n- Added Electricity Maps (paid api) support for forecasting and historical data.  \\n- Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities. \\n\\n### Fixed\\n\\n- Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time.\\n- Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent.\\n- Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure. \\n- Fixes some bugs in unit tests with uncaught scenarios, or faulty tests.\\n\\n### Changed\\n\\n- No previous API\'s were changed.  \\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n- Time is now always in UTC.  Previously the API may have returned local time depending on underlying API.\\n\\n#### API\\n\\n- `/locations` - Show the list of configured named locations that can be used in the API.\\n- `/api/v1/swagger.yaml` - Provides OpenAPI document now at public endpoint when deployed.\\n\\n#### API Deployment\\n\\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n\\n#### SDK \\n\\n- SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability.\\n- Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information.\\n- Additional tests across the SDK have been added.\\n- Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing.\\n\\n\\n#### Other\\n\\n- All contributors need to signoff commits for contribution using `git commit -s`.\\n- Added PR release workflow improvements for the project management of the CA SDK project team.\\n- Updated the project to prune stale PR\'s and issues to help with the management of the CA SDK project.\\n\\n\\n### Upgrading from 1.0.0 to 1.1.0 \\n\\n- Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - [Configuration](/casdk-docs/docs/configuration.md) for a guide. The following is provided as an example of the new data source configuration format.\\n```json\\n{\\n  \\"DataSources\\": {\\n    \\"EmissionsDataSource\\": \\"Json\\",\\n    \\"ForecastDataSource\\": \\"WattTime\\",\\n    \\"Configurations\\": {\\n      \\"WattTime\\": {\\n        \\"Type\\": \\"WattTime\\",\\n        \\"Username\\": \\"username\\",\\n        \\"Password\\": \\"password\\",\\n        \\"BaseURL\\": \\"https://api2.watttime.org/v2/\\",\\n        \\"Proxy\\": {\\n          \\"useProxy\\": true,\\n          \\"url\\": \\"http://10.10.10.1\\",\\n          \\"username\\": \\"proxyUsername\\",\\n          \\"password\\": \\"proxyPassword\\"\\n        }\\n      },\\n      \\"ElectricityMaps\\": {\\n        \\"Type\\": \\"ElectricityMaps\\",\\n        \\"APITokenHeader\\": \\"auth-token\\",\\n        \\"APIToken\\": \\"myAwesomeToken\\",\\n        \\"BaseURL\\": \\"https://api.electricitymap.org/v3/\\"\\n      },\\n      \\"Json\\": {\\n        \\"Type\\": \\"Json\\",\\n        \\"DataFileLocation\\": \\"test-data-azure-emissions.json\\"\\n      }\\n    }\\n  }\\n}\\n```"},{"id":"release-v1.1","metadata":{"permalink":"/carbon-aware-sdk/blog/release-v1.1","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2022-10-01-release-1.0.mdx","source":"@site/blog/2022-10-01-release-1.0.mdx","title":"Release v1.1","description":"Release 1.1","date":"2022-10-01T00:00:00.000Z","formattedDate":"October 1, 2022","tags":[{"label":"v1.1","permalink":"/carbon-aware-sdk/blog/tags/v-1-1"},{"label":"release","permalink":"/carbon-aware-sdk/blog/tags/release"}],"readingTime":2.37,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.1","title":"Release v1.1","tags":["v1.1","release"]},"prevItem":{"title":"Release v1.1","permalink":"/carbon-aware-sdk/blog/release-v1.1"},"nextItem":{"title":"Welcome","permalink":"/carbon-aware-sdk/blog/welcome"}},"content":"Release 1.1\\n\\n\\n\\n## [1.1.0] - 2023-18-07\\n\\n### Added \\n\\n- Added Electricity Maps (paid api) support for forecasting and historical data.  \\n- Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities. \\n\\n### Fixed\\n\\n- Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time.\\n- Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent.\\n- Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure. \\n- Fixes some bugs in unit tests with uncaught scenarios, or faulty tests.\\n\\n### Changed\\n\\n- No previous API\'s were changed.  \\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n- Time is now always in UTC.  Previously the API may have returned local time depending on underlying API.\\n\\n#### API\\n\\n- `/locations` - Show the list of configured named locations that can be used in the API.\\n- `/api/v1/swagger.yaml` - Provides OpenAPI document now at public endpoint when deployed.\\n\\n#### API Deployment\\n\\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n\\n#### SDK \\n\\n- SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability.\\n- Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information.\\n- Additional tests across the SDK have been added.\\n- Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing.\\n\\n\\n#### Other\\n\\n- All contributors need to signoff commits for contribution using `git commit -s`.\\n- Added PR release workflow improvements for the project management of the CA SDK project team.\\n- Updated the project to prune stale PR\'s and issues to help with the management of the CA SDK project.\\n\\n\\n### Upgrading from 1.0.0 to 1.1.0 \\n\\n- Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - [Configuration](/casdk-docs/docs/configuration.md) for a guide. The following is provided as an example of the new data source configuration format.\\n```json\\n{\\n  \\"DataSources\\": {\\n    \\"EmissionsDataSource\\": \\"Json\\",\\n    \\"ForecastDataSource\\": \\"WattTime\\",\\n    \\"Configurations\\": {\\n      \\"WattTime\\": {\\n        \\"Type\\": \\"WattTime\\",\\n        \\"Username\\": \\"username\\",\\n        \\"Password\\": \\"password\\",\\n        \\"BaseURL\\": \\"https://api2.watttime.org/v2/\\",\\n        \\"Proxy\\": {\\n          \\"useProxy\\": true,\\n          \\"url\\": \\"http://10.10.10.1\\",\\n          \\"username\\": \\"proxyUsername\\",\\n          \\"password\\": \\"proxyPassword\\"\\n        }\\n      },\\n      \\"ElectricityMaps\\": {\\n        \\"Type\\": \\"ElectricityMaps\\",\\n        \\"APITokenHeader\\": \\"auth-token\\",\\n        \\"APIToken\\": \\"myAwesomeToken\\",\\n        \\"BaseURL\\": \\"https://api.electricitymap.org/v3/\\"\\n      },\\n      \\"Json\\": {\\n        \\"Type\\": \\"Json\\",\\n        \\"DataFileLocation\\": \\"test-data-azure-emissions.json\\"\\n      }\\n    }\\n  }\\n}\\n```"},{"id":"welcome","metadata":{"permalink":"/carbon-aware-sdk/blog/welcome","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Welcome to our documentation site!","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/carbon-aware-sdk/blog/tags/facebook"},{"label":"hello","permalink":"/carbon-aware-sdk/blog/tags/hello"},{"label":"docusaurus","permalink":"/carbon-aware-sdk/blog/tags/docusaurus"}],"readingTime":0.22,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome","tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Release v1.1","permalink":"/carbon-aware-sdk/blog/release-v1.1"}},"content":"Welcome to our documentation site!\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);