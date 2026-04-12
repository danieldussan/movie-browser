# MovieControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByGenre**](#getbygenre) | **GET** /api/v1/movies/genre/{genre} | |
|[**getById1**](#getbyid1) | **GET** /api/v1/movies/{id} | |
|[**getPopular1**](#getpopular1) | **GET** /api/v1/movies/popular | |
|[**getTopRated1**](#gettoprated1) | **GET** /api/v1/movies/top-rated | |
|[**getTrending1**](#gettrending1) | **GET** /api/v1/movies/trending | |

# **getByGenre**
> PagedResponseDtoContentSummaryDto getByGenre()


### Example

```typescript
import {
    MovieControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MovieControllerApi(configuration);

let genre: string; // (default to undefined)
let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getByGenre(
    genre,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **genre** | [**string**] |  | defaults to undefined|
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

# **getById1**
> MovieDetailDto getById1()


### Example

```typescript
import {
    MovieControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MovieControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getById1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPopular1**
> PagedResponseDtoContentSummaryDto getPopular1()


### Example

```typescript
import {
    MovieControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MovieControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPopular1(
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

# **getTopRated1**
> PagedResponseDtoContentSummaryDto getTopRated1()


### Example

```typescript
import {
    MovieControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MovieControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTopRated1(
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

# **getTrending1**
> PagedResponseDtoContentSummaryDto getTrending1()


### Example

```typescript
import {
    MovieControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MovieControllerApi(configuration);

let pageToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTrending1(
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

