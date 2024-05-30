# User

```ts
const userController = new UserController(client);
```

## Class Name

`UserController`

## Methods

* [Action User](../../doc/controllers/user.md#action-user)
* [Retrieve User Actioningretrieve Actionsretrieve Actions Preventing Loginretrieve Active Actionsretrieve Inactive Actions](../../doc/controllers/user.md#retrieve-user-actioningretrieve-actionsretrieve-actions-preventing-loginretrieve-active-actionsretrieve-inactive-actions)
* [Comment on User](../../doc/controllers/user.md#comment-on-user)
* [Create User](../../doc/controllers/user.md#create-user)
* [Delete Userdeactivate User With Request](../../doc/controllers/user.md#delete-userdeactivate-user-with-request)
* [Patch User](../../doc/controllers/user.md#patch-user)
* [Retrieve Family Members by Family Id](../../doc/controllers/user.md#retrieve-family-members-by-family-id)
* [Modify Action](../../doc/controllers/user.md#modify-action)
* [Add User to Family](../../doc/controllers/user.md#add-user-to-family)
* [Create Family](../../doc/controllers/user.md#create-family)
* [Change Password](../../doc/controllers/user.md#change-password)
* [Check Change Password Using Id](../../doc/controllers/user.md#check-change-password-using-id)
* [Cancel Action](../../doc/controllers/user.md#cancel-action)
* [Retrieve Action](../../doc/controllers/user.md#retrieve-action)
* [Change Password by Identity](../../doc/controllers/user.md#change-password-by-identity)
* [Retrieve User Change Passwordcheck Change Password Using JW Tcheck Change Password Using Login Id](../../doc/controllers/user.md#retrieve-user-change-passwordcheck-change-password-using-jw-tcheck-change-password-using-login-id)
* [Update Userreactivate User](../../doc/controllers/user.md#update-userreactivate-user)
* [Update User Verify Registrationgenerate Registration Verification Idresend Registration Verification](../../doc/controllers/user.md#update-user-verify-registrationgenerate-registration-verification-idresend-registration-verification)
* [Retrieve User Consent](../../doc/controllers/user.md#retrieve-user-consent)
* [Update User Consent](../../doc/controllers/user.md#update-user-consent)
* [Delete User Two Factordisable Two Factordisable Two Factor With Request](../../doc/controllers/user.md#delete-user-two-factordisable-two-factordisable-two-factor-with-request)
* [Update User Verify Emailgenerate Email Verification Idresend Email Verificationresend Email Verification With Application Template](../../doc/controllers/user.md#update-user-verify-emailgenerate-email-verification-idresend-email-verificationresend-email-verification-with-application-template)
* [Verify User Registration](../../doc/controllers/user.md#verify-user-registration)
* [Generate Two Factor Recovery Codes](../../doc/controllers/user.md#generate-two-factor-recovery-codes)
* [Retrieve Two Factor Recovery Codes](../../doc/controllers/user.md#retrieve-two-factor-recovery-codes)
* [Update Registration](../../doc/controllers/user.md#update-registration)
* [Remove User From Family](../../doc/controllers/user.md#remove-user-from-family)
* [Retrieve Families](../../doc/controllers/user.md#retrieve-families)
* [Retrieve User Comments](../../doc/controllers/user.md#retrieve-user-comments)
* [Retrieve User Consents](../../doc/controllers/user.md#retrieve-user-consents)
* [Retrieve Pending Children](../../doc/controllers/user.md#retrieve-pending-children)
* [Retrieve User Recent Loginretrieve Recent Loginss](../../doc/controllers/user.md#retrieve-user-recent-loginretrieve-recent-loginss)
* [Retrieve User by Change Password Id by Email by Login Id by Username by Verification Id Using JWT](../../doc/controllers/user.md#retrieve-user-by-change-password-id-by-email-by-login-id-by-username-by-verification-id-using-jwt)
* [Search Users by Ids](../../doc/controllers/user.md#search-users-by-ids)
* [Retrieve User](../../doc/controllers/user.md#retrieve-user)
* [Patch User Consent](../../doc/controllers/user.md#patch-user-consent)
* [Delete User Registrationdelete Registrationdelete Registration With Request](../../doc/controllers/user.md#delete-user-registrationdelete-registrationdelete-registration-with-request)
* [Retrieve Registration](../../doc/controllers/user.md#retrieve-registration)
* [Enable Two Factor](../../doc/controllers/user.md#enable-two-factor)
* [Create User Verify Emailverify Email Addressverify Email Address by User Id](../../doc/controllers/user.md#create-user-verify-emailverify-email-addressverify-email-address-by-user-id)
* [Send Family Request Email](../../doc/controllers/user.md#send-family-request-email)
* [Create User Consent](../../doc/controllers/user.md#create-user-consent)
* [Revoke User Consent](../../doc/controllers/user.md#revoke-user-consent)
* [Delete User Bulkdeactivate Users by Idsdelete Users by Query](../../doc/controllers/user.md#delete-user-bulkdeactivate-users-by-idsdelete-users-by-query)
* [Forgot Password](../../doc/controllers/user.md#forgot-password)
* [Import Refresh Tokens](../../doc/controllers/user.md#import-refresh-tokens)
* [Import Users](../../doc/controllers/user.md#import-users)
* [Patch Registration](../../doc/controllers/user.md#patch-registration)
* [Register](../../doc/controllers/user.md#register)
* [Search User Comments](../../doc/controllers/user.md#search-user-comments)
* [Search Users by Query](../../doc/controllers/user.md#search-users-by-query)


# Action User

Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.

```ts
async actionUser(
  body?: ActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ActionRequest \| undefined`](../../doc/models/action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActionResponse`](../../doc/models/action-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.actionUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User Actioningretrieve Actionsretrieve Actions Preventing Loginretrieve Active Actionsretrieve Inactive Actions

Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions.

```ts
async retrieveUserActioningretrieveActionsretrieveActionsPreventingLoginretrieveActiveActionsretrieveInactiveActions(
  userId?: string,
  active?: string,
  preventingLogin?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The Id of the user to fetch the actions for. |
| `active` | `string \| undefined` | Query, Optional | - |
| `preventingLogin` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActionResponse`](../../doc/models/action-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveUserActioningretrieveActionsretrieveActionsPreventingLoginretrieveActiveActionsretrieveInactiveActions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Comment on User

Adds a comment to the user's account.

```ts
async commentOnUser(
  xFusionAuthTenantId?: string,
  body?: UserCommentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCommentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`UserCommentRequest \| undefined`](../../doc/models/user-comment-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCommentResponse`](../../doc/models/user-comment-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.commentOnUser();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Create User

Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.

```ts
async createUser(
  userId: string,
  xFusionAuthTenantId?: string,
  body?: UserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | (Optional) The Id for the user. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`UserRequest \| undefined`](../../doc/models/user-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.createUser(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Delete Userdeactivate User With Request

Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.

```ts
async deleteUserdeactivateUserWithRequest(
  userId: string,
  xFusionAuthTenantId?: string,
  hardDelete?: string,
  body?: UserDeleteSingleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to delete (required). |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `hardDelete` | `string \| undefined` | Query, Optional | - |
| `body` | [`UserDeleteSingleRequest \| undefined`](../../doc/models/user-delete-single-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.deleteUserdeactivateUserWithRequest(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Patch User

Updates, via PATCH, the user with the given Id.

```ts
async patchUser(
  userId: string,
  xFusionAuthTenantId?: string,
  body?: UserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`UserRequest \| undefined`](../../doc/models/user-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.patchUser(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Family Members by Family Id

Retrieves all the members of a family by the unique Family Id.

```ts
async retrieveFamilyMembersByFamilyId(
  familyId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FamilyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `familyId` | `string` | Template, Required | The unique Id of the Family. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FamilyResponse`](../../doc/models/family-response.md)

## Example Usage

```ts
const familyId = 'familyId0';

try {
  const { result, ...httpResponse } = await userController.retrieveFamilyMembersByFamilyId(familyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Modify Action

Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.

```ts
async modifyAction(
  actionId: string,
  body?: ActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | The Id of the action to modify. This is technically the user action log id. |
| `body` | [`ActionRequest \| undefined`](../../doc/models/action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActionResponse`](../../doc/models/action-response.md)

## Example Usage

```ts
const actionId = 'actionId0';

try {
  const { result, ...httpResponse } = await userController.modifyAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Add User to Family

Adds a user to an existing family. The family Id must be specified.

```ts
async addUserToFamily(
  familyId: string,
  xFusionAuthTenantId?: string,
  body?: FamilyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FamilyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `familyId` | `string` | Template, Required | The Id of the family. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`FamilyRequest \| undefined`](../../doc/models/family-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FamilyResponse`](../../doc/models/family-response.md)

## Example Usage

```ts
const familyId = 'familyId0';

try {
  const { result, ...httpResponse } = await userController.addUserToFamily(familyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Create Family

Creates a family with the user Id in the request as the owner and sole member of the family. You can optionally specify an Id for the family, if not provided one will be generated.

```ts
async createFamily(
  familyId: string,
  xFusionAuthTenantId?: string,
  body?: FamilyRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FamilyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `familyId` | `string` | Template, Required | (Optional) The Id for the family. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`FamilyRequest \| undefined`](../../doc/models/family-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FamilyResponse`](../../doc/models/family-response.md)

## Example Usage

```ts
const familyId = 'familyId0';

try {
  const { result, ...httpResponse } = await userController.createFamily(familyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Change Password

Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.

```ts
async changePassword(
  changePasswordId: string,
  body?: ChangePasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChangePasswordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `changePasswordId` | `string` | Template, Required | The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated. |
| `body` | [`ChangePasswordRequest \| undefined`](../../doc/models/change-password-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ChangePasswordResponse`](../../doc/models/change-password-response.md)

## Example Usage

```ts
const changePasswordId = 'changePasswordId4';

try {
  const { result, ...httpResponse } = await userController.changePassword(changePasswordId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Check Change Password Using Id

Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

```ts
async checkChangePasswordUsingId(
  changePasswordId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `changePasswordId` | `string` | Template, Required | The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const changePasswordId = 'changePasswordId4';

try {
  const { result, ...httpResponse } = await userController.checkChangePasswordUsingId(changePasswordId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Cancel Action

Cancels the user action.

```ts
async cancelAction(
  actionId: string,
  body?: ActionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | The action Id of the action to cancel. |
| `body` | [`ActionRequest \| undefined`](../../doc/models/action-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActionResponse`](../../doc/models/action-response.md)

## Example Usage

```ts
const actionId = 'actionId0';

try {
  const { result, ...httpResponse } = await userController.cancelAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Action

Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.

```ts
async retrieveAction(
  actionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ActionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `actionId` | `string` | Template, Required | The Id of the action to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ActionResponse`](../../doc/models/action-response.md)

## Example Usage

```ts
const actionId = 'actionId0';

try {
  const { result, ...httpResponse } = await userController.retrieveAction(actionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Change Password by Identity

Changes a user's password using their identity (loginId and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.

```ts
async changePasswordByIdentity(
  body?: ChangePasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ChangePasswordRequest \| undefined`](../../doc/models/change-password-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.changePasswordByIdentity();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User Change Passwordcheck Change Password Using JW Tcheck Change Password Using Login Id

Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.

```ts
async retrieveUserChangePasswordcheckChangePasswordUsingJWTcheckChangePasswordUsingLoginId(
  loginId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loginId` | `string \| undefined` | Query, Optional | The loginId of the User that you intend to change the password for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveUserChangePasswordcheckChangePasswordUsingJWTcheckChangePasswordUsingLoginId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Update Userreactivate User

Updates the user with the given Id. OR Reactivates the user with the given Id.

```ts
async updateUserreactivateUser(
  userId: string,
  xFusionAuthTenantId?: string,
  reactivate?: string,
  body?: UserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `reactivate` | `string \| undefined` | Query, Optional | - |
| `body` | [`UserRequest \| undefined`](../../doc/models/user-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.updateUserreactivateUser(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Update User Verify Registrationgenerate Registration Verification Idresend Registration Verification

Re-sends the application registration verification email to the user. OR Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.

```ts
async updateUserVerifyRegistrationgenerateRegistrationVerificationIdresendRegistrationVerification(
  email?: string,
  applicationId?: string,
  sendVerifyPasswordEmail?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VerifyRegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Query, Optional | The email address of the user that needs a new verification email. |
| `applicationId` | `string \| undefined` | Query, Optional | The Id of the application to be verified. |
| `sendVerifyPasswordEmail` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VerifyRegistrationResponse`](../../doc/models/verify-registration-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.updateUserVerifyRegistrationgenerateRegistrationVerificationIdresendRegistrationVerification();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User Consent

Retrieve a single User consent by Id.

```ts
async retrieveUserConsent(
  userConsentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsentId` | `string` | Template, Required | The User consent Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserConsentResponse`](../../doc/models/user-consent-response.md)

## Example Usage

```ts
const userConsentId = 'userConsentId0';

try {
  const { result, ...httpResponse } = await userController.retrieveUserConsent(userConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Update User Consent

Updates a single User consent by Id.

```ts
async updateUserConsent(
  userConsentId: string,
  body?: UserConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsentId` | `string` | Template, Required | The User Consent Id |
| `body` | [`UserConsentRequest \| undefined`](../../doc/models/user-consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserConsentResponse`](../../doc/models/user-consent-response.md)

## Example Usage

```ts
const userConsentId = 'userConsentId0';

try {
  const { result, ...httpResponse } = await userController.updateUserConsent(userConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Delete User Two Factordisable Two Factordisable Two Factor With Request

Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.

```ts
async deleteUserTwoFactordisableTwoFactordisableTwoFactorWithRequest(
  userId: string,
  methodId?: string,
  code?: string,
  body?: TwoFactorDisableRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the User for which you're disabling two-factor authentication. |
| `methodId` | `string \| undefined` | Query, Optional | The two-factor method identifier you wish to disable |
| `code` | `string \| undefined` | Query, Optional | The two-factor code used verify the the caller knows the two-factor secret. |
| `body` | [`TwoFactorDisableRequest \| undefined`](../../doc/models/two-factor-disable-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.deleteUserTwoFactordisableTwoFactordisableTwoFactorWithRequest(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Update User Verify Emailgenerate Email Verification Idresend Email Verificationresend Email Verification With Application Template

Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Re-sends the verification email to the user. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.

```ts
async updateUserVerifyEmailgenerateEmailVerificationIdresendEmailVerificationresendEmailVerificationWithApplicationTemplate(
  applicationId?: string,
  email?: string,
  sendVerifyEmail?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VerifyEmailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Query, Optional | The unique Application Id to used to resolve an application specific email template. |
| `email` | `string \| undefined` | Query, Optional | The email address of the user that needs a new verification email. |
| `sendVerifyEmail` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`VerifyEmailResponse`](../../doc/models/verify-email-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.updateUserVerifyEmailgenerateEmailVerificationIdresendEmailVerificationresendEmailVerificationWithApplicationTemplate();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Verify User Registration

Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.

```ts
async verifyUserRegistration(
  body?: VerifyRegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyRegistrationRequest \| undefined`](../../doc/models/verify-registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.verifyUserRegistration();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Generate Two Factor Recovery Codes

Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.

```ts
async generateTwoFactorRecoveryCodes(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorRecoveryCodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to generate new Two Factor recovery codes. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TwoFactorRecoveryCodeResponse`](../../doc/models/two-factor-recovery-code-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.generateTwoFactorRecoveryCodes(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Two Factor Recovery Codes

Retrieve two-factor recovery codes for a user.

```ts
async retrieveTwoFactorRecoveryCodes(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorRecoveryCodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to retrieve Two Factor recovery codes. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TwoFactorRecoveryCodeResponse`](../../doc/models/two-factor-recovery-code-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.retrieveTwoFactorRecoveryCodes(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Update Registration

Updates the registration for the user with the given Id and the application defined in the request.

```ts
async updateRegistration(
  userId: string,
  xFusionAuthTenantId?: string,
  body?: RegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user whose registration is going to be updated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`RegistrationRequest \| undefined`](../../doc/models/registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegistrationResponse`](../../doc/models/registration-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.updateRegistration(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Remove User From Family

Removes a user from the family with the given id.

```ts
async removeUserFromFamily(
  familyId: string,
  userId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `familyId` | `string` | Template, Required | The Id of the family to remove the user from. |
| `userId` | `string` | Template, Required | The Id of the user to remove from the family. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const familyId = 'familyId0';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.removeUserFromFamily(
  familyId,
  userId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Families

Retrieves all the families that a user belongs to.

```ts
async retrieveFamilies(
  userId?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FamilyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The User's id |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FamilyResponse`](../../doc/models/family-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveFamilies();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Retrieve User Comments

Retrieves all the comments for the user with the given Id.

```ts
async retrieveUserComments(
  userId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCommentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCommentResponse`](../../doc/models/user-comment-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.retrieveUserComments(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User Consents

Retrieves all the consents for a User.

```ts
async retrieveUserConsents(
  userId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The User's Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserConsentResponse`](../../doc/models/user-consent-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveUserConsents();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Retrieve Pending Children

Retrieves all the children for the given parent email address.

```ts
async retrievePendingChildren(
  parentEmail?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PendingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parentEmail` | `string \| undefined` | Query, Optional | The email of the parent. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PendingResponse`](../../doc/models/pending-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrievePendingChildren();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User Recent Loginretrieve Recent Loginss

Retrieves the last number of login records for a user. OR Retrieves the last number of login records.

```ts
async retrieveUserRecentLoginretrieveRecentLoginss(
  userId?: string,
  offset?: string,
  limit?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RecentLoginResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Query, Optional | The Id of the user. |
| `offset` | `string \| undefined` | Query, Optional | The initial record. e.g. 0 is the last login, 100 will be the 100th most recent login. |
| `limit` | `string \| undefined` | Query, Optional | (Optional, defaults to 10) The number of records to retrieve. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RecentLoginResponse`](../../doc/models/recent-login-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveUserRecentLoginretrieveRecentLoginss();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User by Change Password Id by Email by Login Id by Username by Verification Id Using JWT

Retrieves the user for the given Id. This method does not use an API key, instead it uses a JSON Web Token (JWT) for authentication. OR Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given username. OR Retrieves the user for the loginId. The loginId can be either the username or the email. OR Retrieves the user for the given email. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username.

```ts
async retrieveUserByChangePasswordIdByEmailByLoginIdByUsernameByVerificationIdUsingJWT(
  xFusionAuthTenantId?: string,
  verificationId?: string,
  username?: string,
  loginId?: string,
  email?: string,
  changePasswordId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `verificationId` | `string \| undefined` | Query, Optional | The unique verification Id that has been set on the user object. |
| `username` | `string \| undefined` | Query, Optional | The username of the user. |
| `loginId` | `string \| undefined` | Query, Optional | The email or username of the user. |
| `email` | `string \| undefined` | Query, Optional | The email of the user. |
| `changePasswordId` | `string \| undefined` | Query, Optional | The unique change password Id that was sent via email or returned by the Forgot Password API. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.retrieveUserByChangePasswordIdByEmailByLoginIdByUsernameByVerificationIdUsingJWT();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Search Users by Ids

Retrieves the users for the given ids. If any Id is invalid, it is ignored.

```ts
async searchUsersByIds(
  ids?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string \| undefined` | Query, Optional | The user ids to search for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchResponse`](../../doc/models/search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.searchUsersByIds();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve User

Retrieves the user for the given Id.

```ts
async retrieveUser(
  userId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`](../../doc/models/user-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.retrieveUser(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Patch User Consent

Updates, via PATCH, a single User consent by Id.

```ts
async patchUserConsent(
  userConsentId: string,
  body?: UserConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsentId` | `string` | Template, Required | The User Consent Id |
| `body` | [`UserConsentRequest \| undefined`](../../doc/models/user-consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserConsentResponse`](../../doc/models/user-consent-response.md)

## Example Usage

```ts
const userConsentId = 'userConsentId0';

try {
  const { result, ...httpResponse } = await userController.patchUserConsent(userConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Delete User Registrationdelete Registrationdelete Registration With Request

Deletes the user registration for the given user and application along with the given JSON body that contains the event information. OR Deletes the user registration for the given user and application.

```ts
async deleteUserRegistrationdeleteRegistrationdeleteRegistrationWithRequest(
  userId: string,
  applicationId: string,
  xFusionAuthTenantId?: string,
  body?: RegistrationDeleteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user whose registration is being deleted. |
| `applicationId` | `string` | Template, Required | The Id of the application to remove the registration for. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`RegistrationDeleteRequest \| undefined`](../../doc/models/registration-delete-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'userId0';

const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await userController.deleteUserRegistrationdeleteRegistrationdeleteRegistrationWithRequest(
  userId,
  applicationId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Retrieve Registration

Retrieves the user registration for the user with the given Id and the given application id.

```ts
async retrieveRegistration(
  userId: string,
  applicationId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user. |
| `applicationId` | `string` | Template, Required | The Id of the application. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegistrationResponse`](../../doc/models/registration-response.md)

## Example Usage

```ts
const userId = 'userId0';

const applicationId = 'applicationId0';

try {
  const { result, ...httpResponse } = await userController.retrieveRegistration(
  userId,
  applicationId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Enable Two Factor

Enable two-factor authentication for a user.

```ts
async enableTwoFactor(
  userId: string,
  body?: TwoFactorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TwoFactorResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user to enable two-factor authentication. |
| `body` | [`TwoFactorRequest \| undefined`](../../doc/models/two-factor-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TwoFactorResponse`](../../doc/models/two-factor-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.enableTwoFactor(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Create User Verify Emailverify Email Addressverify Email Address by User Id

Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.

```ts
async createUserVerifyEmailverifyEmailAddressverifyEmailAddressByUserId(
  body?: VerifyEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`VerifyEmailRequest \| undefined`](../../doc/models/verify-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.createUserVerifyEmailverifyEmailAddressverifyEmailAddressByUserId();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Send Family Request Email

Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.

```ts
async sendFamilyRequestEmail(
  body?: FamilyEmailRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`FamilyEmailRequest \| undefined`](../../doc/models/family-email-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.sendFamilyRequestEmail();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Create User Consent

Creates a single User consent.

```ts
async createUserConsent(
  userConsentId: string,
  body?: UserConsentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserConsentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsentId` | `string` | Template, Required | (Optional) The Id for the User consent. If not provided a secure random UUID will be generated. |
| `body` | [`UserConsentRequest \| undefined`](../../doc/models/user-consent-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserConsentResponse`](../../doc/models/user-consent-response.md)

## Example Usage

```ts
const userConsentId = 'userConsentId0';

try {
  const { result, ...httpResponse } = await userController.createUserConsent(userConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Revoke User Consent

Revokes a single User consent by Id.

```ts
async revokeUserConsent(
  userConsentId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userConsentId` | `string` | Template, Required | The User Consent Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userConsentId = 'userConsentId0';

try {
  const { result, ...httpResponse } = await userController.revokeUserConsent(userConsentId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | `ApiError` |


# Delete User Bulkdeactivate Users by Idsdelete Users by Query

Deletes the users with the given ids, or users matching the provided JSON query or queryString. The order of preference is ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users. OR Deactivates the users with the given ids.

```ts
async deleteUserBulkdeactivateUsersByIdsdeleteUsersByQuery(
  userIds?: string,
  dryRun?: string,
  hardDelete?: string,
  body?: UserDeleteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserDeleteResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string \| undefined` | Query, Optional | The ids of the users to deactivate. |
| `dryRun` | `string \| undefined` | Query, Optional | - |
| `hardDelete` | `string \| undefined` | Query, Optional | - |
| `body` | [`UserDeleteRequest \| undefined`](../../doc/models/user-delete-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserDeleteResponse`](../../doc/models/user-delete-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.deleteUserBulkdeactivateUsersByIdsdeleteUsersByQuery();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Forgot Password

Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.

```ts
async forgotPassword(
  body?: ForgotPasswordRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ForgotPasswordResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordRequest \| undefined`](../../doc/models/forgot-password-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ForgotPasswordResponse`](../../doc/models/forgot-password-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.forgotPassword();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Import Refresh Tokens

Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

```ts
async importRefreshTokens(
  body?: RefreshTokenImportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RefreshTokenImportRequest \| undefined`](../../doc/models/refresh-token-import-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.importRefreshTokens();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Import Users

Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.

```ts
async importUsers(
  body?: ImportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ImportRequest \| undefined`](../../doc/models/import-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.importUsers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Patch Registration

Updates, via PATCH, the registration for the user with the given Id and the application defined in the request.

```ts
async patchRegistration(
  userId: string,
  xFusionAuthTenantId?: string,
  body?: RegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | The Id of the user whose registration is going to be updated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`RegistrationRequest \| undefined`](../../doc/models/registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegistrationResponse`](../../doc/models/registration-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.patchRegistration(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Register

Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user Id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.

```ts
async register(
  userId: string,
  xFusionAuthTenantId?: string,
  body?: RegistrationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RegistrationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | (Optional) The Id of the user being registered for the application and optionally created. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`RegistrationRequest \| undefined`](../../doc/models/registration-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RegistrationResponse`](../../doc/models/registration-response.md)

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await userController.register(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Search User Comments

Searches user comments with the specified criteria and pagination.

```ts
async searchUserComments(
  body?: UserCommentSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserCommentSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserCommentSearchRequest \| undefined`](../../doc/models/user-comment-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserCommentSearchResponse`](../../doc/models/user-comment-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.searchUserComments();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |


# Search Users by Query

Retrieves the users for the given search criteria and pagination.

```ts
async searchUsersByQuery(
  body?: SearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SearchRequest \| undefined`](../../doc/models/search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SearchResponse`](../../doc/models/search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await userController.searchUsersByQuery();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error | [`ErrorsError`](../../doc/models/errors-error.md) |

