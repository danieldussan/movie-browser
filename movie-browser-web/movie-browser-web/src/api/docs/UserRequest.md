# UserRequest

Payload for creating or updating a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Unique username | [default to undefined]
**email** | **string** | User email address | [default to undefined]
**password** | **string** | User password (plain text, will be stored as-is) | [default to undefined]

## Example

```typescript
import { UserRequest } from './api';

const instance: UserRequest = {
    username,
    email,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
