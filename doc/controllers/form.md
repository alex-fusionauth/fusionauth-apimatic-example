# Form

```ts
const formController = new FormController(client);
```

## Class Name

`FormController`

## Methods

* [Create Form](../../doc/controllers/form.md#create-form)
* [Retrieve Form](../../doc/controllers/form.md#retrieve-form)
* [Delete Form Field](../../doc/controllers/form.md#delete-form-field)
* [Update Form Field](../../doc/controllers/form.md#update-form-field)
* [Update Form](../../doc/controllers/form.md#update-form)
* [Retrieve Form Fields](../../doc/controllers/form.md#retrieve-form-fields)
* [Retrieve Forms](../../doc/controllers/form.md#retrieve-forms)
* [Delete Form](../../doc/controllers/form.md#delete-form)
* [Create Form Field](../../doc/controllers/form.md#create-form-field)
* [Retrieve Form Field](../../doc/controllers/form.md#retrieve-form-field)


# Create Form

Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.

```ts
async createForm(
  formId: string,
  body?: FormRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formId` | `string` | Template, Required | (Optional) The Id for the form. If not provided a secure random UUID will be generated. |
| `body` | [`FormRequest \| undefined`](../../doc/models/form-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormResponse`](../../doc/models/form-response.md)

## Example Usage

```ts
const formId = 'formId2';

try {
  const { result, ...httpResponse } = await formController.createForm(formId);
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


# Retrieve Form

Retrieves the form with the given Id.

```ts
async retrieveForm(
  formId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formId` | `string` | Template, Required | The Id of the form. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormResponse`](../../doc/models/form-response.md)

## Example Usage

```ts
const formId = 'formId2';

try {
  const { result, ...httpResponse } = await formController.retrieveForm(formId);
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


# Delete Form Field

Deletes the form field for the given Id.

```ts
async deleteFormField(
  fieldId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldId` | `string` | Template, Required | The Id of the form field to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const fieldId = 'fieldId8';

try {
  const { result, ...httpResponse } = await formController.deleteFormField(fieldId);
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


# Update Form Field

Updates the form field with the given Id.

```ts
async updateFormField(
  fieldId: string,
  body?: FormFieldRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormFieldResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldId` | `string` | Template, Required | The Id of the form field to update. |
| `body` | [`FormFieldRequest \| undefined`](../../doc/models/form-field-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormFieldResponse`](../../doc/models/form-field-response.md)

## Example Usage

```ts
const fieldId = 'fieldId8';

try {
  const { result, ...httpResponse } = await formController.updateFormField(fieldId);
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


# Update Form

Updates the form with the given Id.

```ts
async updateForm(
  formId: string,
  body?: FormRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formId` | `string` | Template, Required | The Id of the form to update. |
| `body` | [`FormRequest \| undefined`](../../doc/models/form-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormResponse`](../../doc/models/form-response.md)

## Example Usage

```ts
const formId = 'formId2';

try {
  const { result, ...httpResponse } = await formController.updateForm(formId);
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


# Retrieve Form Fields

Retrieves all the forms fields

```ts
async retrieveFormFields(
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormFieldResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormFieldResponse`](../../doc/models/form-field-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await formController.retrieveFormFields();
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


# Retrieve Forms

Retrieves all the forms.

```ts
async retrieveForms(
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormResponse`](../../doc/models/form-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await formController.retrieveForms();
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


# Delete Form

Deletes the form for the given Id.

```ts
async deleteForm(
  formId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `formId` | `string` | Template, Required | The Id of the form to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const formId = 'formId2';

try {
  const { result, ...httpResponse } = await formController.deleteForm(formId);
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


# Create Form Field

Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.

```ts
async createFormField(
  fieldId: string,
  body?: FormFieldRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormFieldResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldId` | `string` | Template, Required | (Optional) The Id for the form field. If not provided a secure random UUID will be generated. |
| `body` | [`FormFieldRequest \| undefined`](../../doc/models/form-field-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormFieldResponse`](../../doc/models/form-field-response.md)

## Example Usage

```ts
const fieldId = 'fieldId8';

try {
  const { result, ...httpResponse } = await formController.createFormField(fieldId);
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


# Retrieve Form Field

Retrieves the form field with the given Id.

```ts
async retrieveFormField(
  fieldId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FormFieldResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fieldId` | `string` | Template, Required | The Id of the form field. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FormFieldResponse`](../../doc/models/form-field-response.md)

## Example Usage

```ts
const fieldId = 'fieldId8';

try {
  const { result, ...httpResponse } = await formController.retrieveFormField(fieldId);
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

