# Email

```ts
const emailController = new EmailController(client);
```

## Class Name

`EmailController`

## Methods

* [Delete Email Template](../../doc/controllers/email.md#delete-email-template)
* [Patch Email Template](../../doc/controllers/email.md#patch-email-template)
* [Update Email Template](../../doc/controllers/email.md#update-email-template)
* [Create Email Template](../../doc/controllers/email.md#create-email-template)
* [Retrieve Email Template Preview](../../doc/controllers/email.md#retrieve-email-template-preview)
* [Search Email Templates](../../doc/controllers/email.md#search-email-templates)
* [Send Email](../../doc/controllers/email.md#send-email)
* [Retrieve Email Template](../../doc/controllers/email.md#retrieve-email-template)
* [Retrieve Email Templates](../../doc/controllers/email.md#retrieve-email-templates)


# Delete Email Template

Deletes the email template for the given Id.

```ts
async deleteEmailTemplate(
  emailTemplateId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | The Id of the email template to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.deleteEmailTemplate(emailTemplateId);
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


# Patch Email Template

Updates, via PATCH, the email template with the given Id.

```ts
async patchEmailTemplate(
  emailTemplateId: string,
  xFusionAuthTenantId?: string,
  body?: EmailTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | The Id of the email template to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EmailTemplateRequest \| undefined`](../../doc/models/email-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateResponse`](../../doc/models/email-template-response.md)

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.patchEmailTemplate(emailTemplateId);
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


# Update Email Template

Updates the email template with the given Id.

```ts
async updateEmailTemplate(
  emailTemplateId: string,
  xFusionAuthTenantId?: string,
  body?: EmailTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | The Id of the email template to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EmailTemplateRequest \| undefined`](../../doc/models/email-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateResponse`](../../doc/models/email-template-response.md)

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.updateEmailTemplate(emailTemplateId);
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


# Create Email Template

Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.

```ts
async createEmailTemplate(
  emailTemplateId: string,
  xFusionAuthTenantId?: string,
  body?: EmailTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | (Optional) The Id for the template. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EmailTemplateRequest \| undefined`](../../doc/models/email-template-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateResponse`](../../doc/models/email-template-response.md)

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.createEmailTemplate(emailTemplateId);
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


# Retrieve Email Template Preview

Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.

```ts
async retrieveEmailTemplatePreview(
  body?: PreviewRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PreviewRequest \| undefined`](../../doc/models/preview-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PreviewResponse`](../../doc/models/preview-response.md)

## Example Usage

```ts
const body: PreviewRequest = {
  locale: 'en_US',
};

try {
  const { result, ...httpResponse } = await emailController.retrieveEmailTemplatePreview(body);
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


# Search Email Templates

Searches email templates with the specified criteria and pagination.

```ts
async searchEmailTemplates(
  body?: EmailTemplateSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EmailTemplateSearchRequest \| undefined`](../../doc/models/email-template-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateSearchResponse`](../../doc/models/email-template-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await emailController.searchEmailTemplates();
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


# Send Email

Send an email using an email template id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.

```ts
async sendEmail(
  emailTemplateId: string,
  body?: SendRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SendResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | The Id for the template. |
| `body` | [`SendRequest \| undefined`](../../doc/models/send-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SendResponse`](../../doc/models/send-response.md)

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.sendEmail(emailTemplateId);
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


# Retrieve Email Template

Retrieves the email template for the given Id. If you don't specify the id, this will return all the email templates.

```ts
async retrieveEmailTemplate(
  emailTemplateId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailTemplateId` | `string` | Template, Required | (Optional) The Id of the email template. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateResponse`](../../doc/models/email-template-response.md)

## Example Usage

```ts
const emailTemplateId = 'emailTemplateId2';

try {
  const { result, ...httpResponse } = await emailController.retrieveEmailTemplate(emailTemplateId);
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


# Retrieve Email Templates

Retrieves all the email templates.

```ts
async retrieveEmailTemplates(
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EmailTemplateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EmailTemplateResponse`](../../doc/models/email-template-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await emailController.retrieveEmailTemplates();
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

