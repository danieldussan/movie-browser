# SeriesControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getById**](#getbyid) | **GET** /api/v1/series/{id} | |
|[**getEpisodes**](#getepisodes) | **GET** /api/v1/series/{id}/seasons/{seasonNumber}/episodes | |
|[**getPopular**](#getpopular) | **GET** /api/v1/series/popular | |
|[**getSeasons**](#getseasons) | **GET** /api/v1/series/{id}/seasons | |
|[**getTopRated**](#gettoprated) | **GET** /api/v1/series/top-rated | |
|[**getTrending**](#gettrending) | **GET** /api/v1/series/trending | |

# **getById**
> SeriesDetailDto getById()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SeriesDetailDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEpisodes**
> Array<EpisodeDto> getEpisodes()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let id: string; // (default to undefined)
let seasonNumber: number; // (default to undefined)

const { status, data } = await apiInstance.getEpisodes(
    id,
    seasonNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **seasonNumber** | [**number**] |  | defaults to undefined|


### Return type

**Array<EpisodeDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPopular**
> PagedResponseDtoContentSummaryDto getPopular()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPopular(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PagedResponseDtoContentSummaryDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSeasons**
> Array<SeasonDto> getSeasons()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getSeasons(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<SeasonDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTopRated**
> PagedResponseDtoContentSummaryDto getTopRated()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTopRated(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PagedResponseDtoContentSummaryDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrending**
> PagedResponseDtoContentSummaryDto getTrending()


### Example

```typescript
import {
    SeriesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTrending(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PagedResponseDtoContentSummaryDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

