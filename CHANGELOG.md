# Changelog

All notable changes to the Carbon Aware SDK will be documented in this file.


## [1.4.0] - 2024-05

### Added 

-[#401] [Feature Contribution]: Upgrade .NET version to .NET 8 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/401)
-[#419] [Feature Contribution]: Migrate sample implementation of Azure Function to isolated worker model ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/419)
-[PR #500] Up Helm chart version to 1.2.0 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/500)

-[#397] [Feature Contribution]: Data caching in the SDK ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/397)

### Fixed

-[#505] [Bug]: Project Page wiki from GSF website still says it's in incubation ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/505)
-[#496] [URGENT] WebAPI container has not built due to segmentation fault ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/496)
-[#487] [Bug]: Getting started guide is lost ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/487)


### Changed

-[#477] [Bug]: Ensure the readme file shows as the project overview content on the documentation site ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/477)
-[PR #485] Docs overview, disclaimer & pipeline updates for graduation ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/485)

#### API

- 

#### API Deployment

- 

#### SDK 

- 


#### Other

- 


For more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503) 


## [1.3.0] - 2024-02

### Added 

- docs site at https://carbon-aware-sdk.greensoftware.foundation/
- [PR #464 Create SECURITY.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/464)
- [PR #461 CarbonHack24 Update to README.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/461)
- [PR #457 Features/codespaces quickstart ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/457)
- [PR #459 Readme updates for clarity ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/459)
- [PR #449 Support location source setting in Helm chart ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/449)
- [PR #431 Update documentation of Usefulness (adopters.md)  ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/431)%   
- [#416 Add disclaimer banner to any public-facing documentation (docusaurus webpage) ](https://github.com/Green-Software-Foundation/carbon-aware-s dk/issues/416)
- [#415 Update documentation of secureness (security.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/415)
- [#414 Update documentation of Usefulness (adopters.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/414)
- [#413 Update documentation for Test Coverage ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/413)
- [#412 Update documentation for End User Guide (enablement.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/412)
- [#410 Update documentation for How to contribute (contributing.md ) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/410)

### Fixed

- [#344 [Bug]: Fix and update doc deployment workflow ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/344)                 

### Changed

- [#411 Update documentation for Project overview (ReadMe) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/411)
- [PR #454 Update quickstart.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/454)
- [PR #453 Update overview.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/453)

#### API

- 

#### API Deployment

- 

#### SDK 

- 


#### Other

- 


For more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/474](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/474) 

## [1.2.0] - 2024-01

### Added 

- [#381 Add Helm chart and workflow](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/381)
- New package release for Helm charts available at https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/charts%2Fcarbon-aware-sdk

### Fixed

- [#232 Generating SDK client does not work on linux](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232)
- [#393 Fix: verify-azure-function-with-packages](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/393)
- [#391 fixing 3 broken links in overview.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/391)
- [#389 EMFree data source should regard specified time range](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/389)

### Changed

- [#425 Updating CONTRIBUTING.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/425)

#### API

- 

#### API Deployment

- 

#### SDK 

- 


#### Other

- Improved process leveraging the project boards at https://github.com/orgs/Green-Software-Foundation/projects/15/views/2


For more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues?q=label%3Av1.2+is%3Aclosed+)

## [1.1.0] - 2023-07-18

### Added 

- Added Electricity Maps (paid api) support for forecasting and historical data.  
- Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities. 

### Fixed

- Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time.
- Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent.
- Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure. 
- Fixes some bugs in unit tests with uncaught scenarios, or faulty tests.

### Changed

- No previous API's were changed.  
- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.
- Time is now always in UTC.  Previously the API may have returned local time depending on underlying API.

#### API

- `/locations` - Show the list of configured named locations that can be used in the API.
- `/api/v1/swagger.yaml` - Provides OpenAPI document now at public endpoint when deployed.

#### API Deployment

- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.

#### SDK 

- SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability.
- Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information.
- Additional tests across the SDK have been added.
- Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing.


#### Other

- All contributors need to signoff commits for contribution using `git commit -s`.
- Added PR release workflow improvements for the project management of the CA SDK project team.
- Updated the project to prune stale PR's and issues to help with the management of the CA SDK project.


### Upgrading from 1.0.0 to 1.1.0 

- Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - [Configuration](docs/configuration.md) for a guide. The following is provided as an example of the new data source configuration format.
```json
{
  "DataSources": {
    "EmissionsDataSource": "Json",
    "ForecastDataSource": "WattTime",
    "Configurations": {
      "WattTime": {
        "Type": "WattTime",
        "Username": "username",
        "Password": "password",
        "BaseURL": "https://api2.watttime.org/v2/",
        "Proxy": {
          "useProxy": true,
          "url": "http://10.10.10.1",
          "username": "proxyUsername",
          "password": "proxyPassword"
        }
      },
      "ElectricityMaps": {
        "Type": "ElectricityMaps",
        "APITokenHeader": "auth-token",
        "APIToken": "myAwesomeToken",
        "BaseURL": "https://api.electricitymap.org/v3/"
      },
      "Json": {
        "Type": "Json",
        "DataFileLocation": "test-data-azure-emissions.json"
      }
    }
  }
}
```

## [1.0.0] - 2022-10-01

### Added

- Added CLI for carbon data 
- Added WebApi for carbon data 
- Added support for WattTime in forecasts and historical data sets
- Added following API's 
  - `/emissions/bylocation` - Calculate the best emission data by location for a specified time period 
  - `/emissions/bylocations` - Calculate the observed emission data by list of locations for a specified time period
  - `/emissions/bylocations/best` - Calculate the best emission data by list of locations for a specified time period
  - `/emissions/average-carbon-intensity` - Retrieves the measured carbon intensity data between the time boundaries and calculates the average carbon intensity during that period
  - `/emissions/forecasts/current` - Retrieves the most recent forecasted data and calculates the optimal marginal carbon intensity window
  - `/emissions/forecasts/batch` - Given an array of historical forecasts, retrieves the data that contains forecasts metadata, the optimal forecast and a range of forecasts filtered by the attributes [start...end] if provided
  - `/emissions/average-carbon-intensity/batch` - Given an array of request objects, each with their own location and time boundaries, calculate the average carbon intensity for that location and time period and return an array of carbon intensity objects.


### Changed

- First major release to main, no previous version

### Security

- No known security vulnerabilities or concerns 
