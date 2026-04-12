# UserResponse

User data returned by the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique user identifier | [optional] [default to undefined]
**username** | **string** | Unique username | [optional] [default to undefined]
**email** | **string** | User email address | [optional] [default to undefined]
**createdAt** | **string** | Timestamp when the user was created | [optional] [default to undefined]

## Example

```typescript
import { UserResponse } from './api';

const instance: UserResponse = {
    id,
    username,
    email,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
