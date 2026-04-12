# MoviesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByGenre**](#getbygenre) | **GET** /api/v1/movies/genre/{genre} | List movies by genre|
|[**getById1**](#getbyid1) | **GET** /api/v1/movies/{id} | Get movie details by IMDB ID|
|[**getPopular1**](#getpopular1) | **GET** /api/v1/movies/popular | List popular movies|
|[**getTopRated1**](#gettoprated1) | **GET** /api/v1/movies/top-rated | List top-rated movies|
|[**getTrending1**](#gettrending1) | **GET** /api/v1/movies/trending | List trending movies|

# **getByGenre**
> PagedResponseDtoContentSummaryDto getByGenre()

Returns a paginated list of movies filtered by a specific genre.

### Example

```typescript
import {
    MoviesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MoviesApi(configuration);

let genre: string; //Genre name (e.g. Action, Drama, Comedy) (default to undefined)
let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getByGenre(
    genre,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **genre** | [**string**] | Genre name (e.g. Action, Drama, Comedy) | defaults to undefined|
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
|**200** | Paginated list of movies for the given genre |  -  |
|**400** | Invalid genre value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getById1**
> MovieDetailDto getById1()


### Example

```typescript
import {
    MoviesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MoviesApi(configuration);

let id: string; //IMDB title ID (default to undefined)

const { status, data } = await apiInstance.getById1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | IMDB title ID | defaults to undefined|


### Return type

**MovieDetailDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Movie found |  -  |
|**404** | Movie not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPopular1**
> PagedResponseDtoContentSummaryDto getPopular1()

Returns a paginated list of currently popular movies.

### Example

```typescript
import {
    MoviesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MoviesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getPopular1(
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
|**200** | Paginated list of popular movies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTopRated1**
> PagedResponseDtoContentSummaryDto getTopRated1()

Returns a paginated list of top-rated movies by vote score.

### Example

```typescript
import {
    MoviesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MoviesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getTopRated1(
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
|**200** | Paginated list of top-rated movies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTrending1**
> PagedResponseDtoContentSummaryDto getTrending1()

Returns a paginated list of currently trending movies.

### Example

```typescript
import {
    MoviesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MoviesApi(configuration);

let pageToken: string; //Token for the next page of results (optional) (default to undefined)

const { status, data } = await apiInstance.getTrending1(
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
|**200** | Paginated list of trending movies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

