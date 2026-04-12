# SeriesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getById**](#getbyid) | **GET** /api/v1/series/{id} | Get series details by IMDB ID|
|[**getEpisodes**](#getepisodes) | **GET** /api/v1/series/{id}/seasons/{seasonNumber}/episodes | List episodes of a specific season|
|[**getPopular**](#getpopular) | **GET** /api/v1/series/popular | List popular series|
|[**getSeasons**](#getseasons) | **GET** /api/v1/series/{id}/seasons | List seasons of a series|
|[**getTopRated**](#gettoprated) | **GET** /api/v1/series/top-rated | List top-rated series|
|[**getTrending**](#gettrending) | **GET** /api/v1/series/trending | List trending series|

# **getById**
> SeriesDetailDto getById()


### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let id: string; //IMDB title ID (default to undefined)

const { status, data } = await apiInstance.getById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | IMDB title ID | defaults to undefined|


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
|**200** | Series found |  -  |
|**404** | Series not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEpisodes**
> Array<EpisodeDto> getEpisodes()


### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let id: string; //IMDB title ID (default to undefined)
let seasonNumber: number; //Season number (default to undefined)

const { status, data } = await apiInstance.getEpisodes(
    id,
    seasonNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | IMDB title ID | defaults to undefined|
| **seasonNumber** | [**number**] | Season number | defaults to undefined|


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
|**200** | List of episodes returned successfully |  -  |
|**404** | Series or season not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPopular**
> PagedResponseDtoContentSummaryDto getPopular()

Returns a paginated list of currently popular TV series.

### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getPopular(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] | Token for the next page of results | (optional) defaults to undefined|


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
|**200** | Paginated list of popular series |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSeasons**
> Array<SeasonDto> getSeasons()


### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let id: string; //IMDB title ID (default to undefined)

const { status, data } = await apiInstance.getSeasons(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | IMDB title ID | defaults to undefined|


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
|**200** | List of seasons returned successfully |  -  |
|**404** | Series not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTopRated**
> PagedResponseDtoContentSummaryDto getTopRated()

Returns a paginated list of top-rated TV series by vote score.

### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getTopRated(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] | Token for the next page of results | (optional) defaults to undefined|


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
|**200** | Paginated list of top-rated series |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrending**
> PagedResponseDtoContentSummaryDto getTrending()

Returns a paginated list of currently trending TV series.

### Example

```typescript
import {
    SeriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SeriesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getTrending(
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageToken** | [**string**] | Token for the next page of results | (optional) defaults to undefined|


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
|**200** | Paginated list of trending series |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

