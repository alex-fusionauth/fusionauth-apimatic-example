# Theme

```ts
const themeController = new ThemeController(client);
```

## Class Name

`ThemeController`

## Methods

* [Update Theme](../../doc/controllers/theme.md#update-theme)
* [Search Themes](../../doc/controllers/theme.md#search-themes)
* [Retrieve Themes](../../doc/controllers/theme.md#retrieve-themes)
* [Create Theme](../../doc/controllers/theme.md#create-theme)
* [Patch Theme](../../doc/controllers/theme.md#patch-theme)
* [Retrieve Theme](../../doc/controllers/theme.md#retrieve-theme)
* [Delete Theme](../../doc/controllers/theme.md#delete-theme)


# Update Theme

Updates the theme with the given Id.

```ts
async updateTheme(
  themeId: string,
  body?: ThemeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `string` | Template, Required | The Id of the theme to update. |
| `body` | [`ThemeRequest \| undefined`](../../doc/models/theme-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeResponse`](../../doc/models/theme-response.md)

## Example Usage

```ts
const themeId = 'themeId4';

try {
  const { result, ...httpResponse } = await themeController.updateTheme(themeId);
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


# Search Themes

Searches themes with the specified criteria and pagination.

```ts
async searchThemes(
  body?: ThemeSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ThemeSearchRequest \| undefined`](../../doc/models/theme-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeSearchResponse`](../../doc/models/theme-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await themeController.searchThemes();
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


# Retrieve Themes

Retrieves all the themes.

```ts
async retrieveThemes(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeResponse`](../../doc/models/theme-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await themeController.retrieveThemes();
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


# Create Theme

Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.

```ts
async createTheme(
  themeId: string,
  body?: ThemeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `string` | Template, Required | (Optional) The Id for the theme. If not provided a secure random UUID will be generated. |
| `body` | [`ThemeRequest \| undefined`](../../doc/models/theme-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeResponse`](../../doc/models/theme-response.md)

## Example Usage

```ts
const themeId = 'themeId4';

try {
  const { result, ...httpResponse } = await themeController.createTheme(themeId);
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


# Patch Theme

Updates, via PATCH, the theme with the given Id.

```ts
async patchTheme(
  themeId: string,
  body?: ThemeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `string` | Template, Required | The Id of the theme to update. |
| `body` | [`ThemeRequest \| undefined`](../../doc/models/theme-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeResponse`](../../doc/models/theme-response.md)

## Example Usage

```ts
const themeId = 'themeId4';

try {
  const { result, ...httpResponse } = await themeController.patchTheme(themeId);
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


# Retrieve Theme

Retrieves the theme for the given Id.

```ts
async retrieveTheme(
  themeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ThemeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `string` | Template, Required | The Id of the theme. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ThemeResponse`](../../doc/models/theme-response.md)

## Example Usage

```ts
const themeId = 'themeId4';

try {
  const { result, ...httpResponse } = await themeController.retrieveTheme(themeId);
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


# Delete Theme

Deletes the theme for the given Id.

```ts
async deleteTheme(
  themeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `themeId` | `string` | Template, Required | The Id of the theme to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const themeId = 'themeId4';

try {
  const { result, ...httpResponse } = await themeController.deleteTheme(themeId);
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

