# SearchApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**search**](#search) | **GET** /api/v1/search | Search movies and series|

# **search**
> ContentSummaryDto search()

Performs a full-text search across IMDB titles. Returns a flat list of matching movies and series summaries.

### Example

```typescript
import {
    SearchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchApi(configuration);

let query: string; //Search term to query IMDB titles (default to undefined)

const { status, data } = await apiInstance.search(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | Search term to query IMDB titles | defaults to undefined|


### Return type

**ContentSummaryDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Search results returned successfully |  -  |
|**400** | Missing or empty query parameter |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

