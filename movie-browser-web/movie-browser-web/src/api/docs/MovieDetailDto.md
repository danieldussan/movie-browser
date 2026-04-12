# MovieDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**originalTitle** | **string** |  | [optional] [default to undefined]
**year** | **number** |  | [optional] [default to undefined]
**runtimeMinutes** | **number** |  | [optional] [default to undefined]
**plot** | **string** |  | [optional] [default to undefined]
**posterUrl** | **string** |  | [optional] [default to undefined]
**genres** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**countries** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**languages** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**rating** | [**RatingDto**](RatingDto.md) |  | [optional] [default to undefined]
**directors** | [**Array&lt;PersonDto&gt;**](PersonDto.md) |  | [optional] [default to undefined]
**writers** | [**Array&lt;PersonDto&gt;**](PersonDto.md) |  | [optional] [default to undefined]
**cast** | [**Array&lt;PersonDto&gt;**](PersonDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MovieDetailDto } from './api';

const instance: MovieDetailDto = {
    id,
    title,
    originalTitle,
    year,
    runtimeMinutes,
    plot,
    posterUrl,
    genres,
    countries,
    languages,
    rating,
    directors,
    writers,
    cast,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
