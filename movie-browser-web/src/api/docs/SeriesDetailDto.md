# SeriesDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**originalTitle** | **string** |  | [optional] [default to undefined]
**startYear** | **number** |  | [optional] [default to undefined]
**endYear** | **number** |  | [optional] [default to undefined]
**plot** | **string** |  | [optional] [default to undefined]
**posterUrl** | **string** |  | [optional] [default to undefined]
**genres** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**countries** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**languages** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**rating** | [**RatingDto**](RatingDto.md) |  | [optional] [default to undefined]
**directors** | [**Array&lt;PersonDto&gt;**](PersonDto.md) |  | [optional] [default to undefined]
**cast** | [**Array&lt;PersonDto&gt;**](PersonDto.md) |  | [optional] [default to undefined]
**totalSeasons** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SeriesDetailDto } from './api';

const instance: SeriesDetailDto = {
    id,
    title,
    originalTitle,
    startYear,
    endYear,
    plot,
    posterUrl,
    genres,
    countries,
    languages,
    rating,
    directors,
    cast,
    totalSeasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
