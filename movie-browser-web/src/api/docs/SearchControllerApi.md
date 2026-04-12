# SearchControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**search**](#search) | **GET** /api/v1/search | |

# **search**
> Array<ContentSummaryDto> search()


### Example

```typescript
import {
    SearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SearchControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.search(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


### Return type

**Array<ContentSummaryDto>**

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

