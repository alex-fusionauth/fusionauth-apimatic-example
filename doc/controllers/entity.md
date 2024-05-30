# Entity

```ts
const entityController = new EntityController(client);
```

## Class Name

`EntityController`

## Methods

* [Delete Entity](../../doc/controllers/entity.md#delete-entity)
* [Retrieve Entity](../../doc/controllers/entity.md#retrieve-entity)
* [Update Entity](../../doc/controllers/entity.md#update-entity)
* [Create Entity](../../doc/controllers/entity.md#create-entity)
* [Update Entity Type](../../doc/controllers/entity.md#update-entity-type)
* [Create Entity Type Permission](../../doc/controllers/entity.md#create-entity-type-permission)
* [Delete Entity Type Permission](../../doc/controllers/entity.md#delete-entity-type-permission)
* [Delete Entity Grant](../../doc/controllers/entity.md#delete-entity-grant)
* [Search Entities by Ids](../../doc/controllers/entity.md#search-entities-by-ids)
* [Create Entity Type](../../doc/controllers/entity.md#create-entity-type)
* [Delete Entity Type](../../doc/controllers/entity.md#delete-entity-type)
* [Retrieve Entity Type](../../doc/controllers/entity.md#retrieve-entity-type)
* [Retrieve Entity Grant](../../doc/controllers/entity.md#retrieve-entity-grant)
* [Search Entities](../../doc/controllers/entity.md#search-entities)
* [Search Entity Types](../../doc/controllers/entity.md#search-entity-types)
* [Patch Entity Type](../../doc/controllers/entity.md#patch-entity-type)
* [Update Entity Type Permission](../../doc/controllers/entity.md#update-entity-type-permission)
* [Upsert Entity Grant](../../doc/controllers/entity.md#upsert-entity-grant)
* [Search Entity Grants](../../doc/controllers/entity.md#search-entity-grants)
* [Retrieve Entity Types](../../doc/controllers/entity.md#retrieve-entity-types)


# Delete Entity

Deletes the Entity for the given Id.

```ts
async deleteEntity(
  entityId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity to delete. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.deleteEntity(entityId);
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


# Retrieve Entity

Retrieves the Entity for the given Id.

```ts
async retrieveEntity(
  entityId: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityResponse`](../../doc/models/entity-response.md)

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.retrieveEntity(entityId);
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


# Update Entity

Updates the Entity with the given Id.

```ts
async updateEntity(
  entityId: string,
  xFusionAuthTenantId?: string,
  body?: EntityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity to update. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EntityRequest \| undefined`](../../doc/models/entity-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityResponse`](../../doc/models/entity-response.md)

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.updateEntity(entityId);
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


# Create Entity

Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.

```ts
async createEntity(
  entityId: string,
  xFusionAuthTenantId?: string,
  body?: EntityRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | (Optional) The Id for the Entity. If not provided a secure random UUID will be generated. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EntityRequest \| undefined`](../../doc/models/entity-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityResponse`](../../doc/models/entity-response.md)

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.createEntity(entityId);
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


# Update Entity Type

Updates the Entity Type with the given Id.

```ts
async updateEntityType(
  entityTypeId: string,
  body?: EntityTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the Entity Type to update. |
| `body` | [`EntityTypeRequest \| undefined`](../../doc/models/entity-type-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

try {
  const { result, ...httpResponse } = await entityController.updateEntityType(entityTypeId);
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


# Create Entity Type Permission

Creates a new permission for an entity type. You must specify the Id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.

```ts
async createEntityTypePermission(
  entityTypeId: string,
  permissionId: string,
  body?: EntityTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the entity type to create the permission on. |
| `permissionId` | `string` | Template, Required | (Optional) The Id of the permission. If not provided a secure random UUID will be generated. |
| `body` | [`EntityTypeRequest \| undefined`](../../doc/models/entity-type-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

const permissionId = 'permissionId6';

try {
  const { result, ...httpResponse } = await entityController.createEntityTypePermission(
  entityTypeId,
  permissionId
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


# Delete Entity Type Permission

Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.

```ts
async deleteEntityTypePermission(
  entityTypeId: string,
  permissionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the entityType the the permission belongs to. |
| `permissionId` | `string` | Template, Required | The Id of the permission to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

const permissionId = 'permissionId6';

try {
  const { result, ...httpResponse } = await entityController.deleteEntityTypePermission(
  entityTypeId,
  permissionId
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


# Delete Entity Grant

Deletes an Entity Grant for the given User or Entity.

```ts
async deleteEntityGrant(
  entityId: string,
  recipientEntityId?: string,
  userId?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity that the Entity Grant is being deleted for. |
| `recipientEntityId` | `string \| undefined` | Query, Optional | (Optional) The Id of the Entity that the Entity Grant is for. |
| `userId` | `string \| undefined` | Query, Optional | (Optional) The Id of the User that the Entity Grant is for. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.deleteEntityGrant(entityId);
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


# Search Entities by Ids

Retrieves the entities for the given ids. If any Id is invalid, it is ignored.

```ts
async searchEntitiesByIds(
  ids?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntitySearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string \| undefined` | Query, Optional | The entity ids to search for. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntitySearchResponse`](../../doc/models/entity-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await entityController.searchEntitiesByIds();
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


# Create Entity Type

Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.

```ts
async createEntityType(
  entityTypeId: string,
  body?: EntityTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | (Optional) The Id for the Entity Type. If not provided a secure random UUID will be generated. |
| `body` | [`EntityTypeRequest \| undefined`](../../doc/models/entity-type-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

try {
  const { result, ...httpResponse } = await entityController.createEntityType(entityTypeId);
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


# Delete Entity Type

Deletes the Entity Type for the given Id.

```ts
async deleteEntityType(
  entityTypeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the Entity Type to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

try {
  const { result, ...httpResponse } = await entityController.deleteEntityType(entityTypeId);
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


# Retrieve Entity Type

Retrieves the Entity Type for the given Id.

```ts
async retrieveEntityType(
  entityTypeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the Entity Type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

try {
  const { result, ...httpResponse } = await entityController.retrieveEntityType(entityTypeId);
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


# Retrieve Entity Grant

Retrieves an Entity Grant for the given Entity and User/Entity.

```ts
async retrieveEntityGrant(
  entityId: string,
  recipientEntityId?: string,
  userId?: string,
  xFusionAuthTenantId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityGrantResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity. |
| `recipientEntityId` | `string \| undefined` | Query, Optional | (Optional) The Id of the Entity that the Entity Grant is for. |
| `userId` | `string \| undefined` | Query, Optional | (Optional) The Id of the User that the Entity Grant is for. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityGrantResponse`](../../doc/models/entity-grant-response.md)

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.retrieveEntityGrant(entityId);
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


# Search Entities

Searches entities with the specified criteria and pagination.

```ts
async searchEntities(
  body?: EntitySearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntitySearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EntitySearchRequest \| undefined`](../../doc/models/entity-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntitySearchResponse`](../../doc/models/entity-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await entityController.searchEntities();
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


# Search Entity Types

Searches the entity types with the specified criteria and pagination.

```ts
async searchEntityTypes(
  body?: EntityTypeSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EntityTypeSearchRequest \| undefined`](../../doc/models/entity-type-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeSearchResponse`](../../doc/models/entity-type-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await entityController.searchEntityTypes();
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


# Patch Entity Type

Updates, via PATCH, the Entity Type with the given Id.

```ts
async patchEntityType(
  entityTypeId: string,
  body?: EntityTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the Entity Type to update. |
| `body` | [`EntityTypeRequest \| undefined`](../../doc/models/entity-type-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

try {
  const { result, ...httpResponse } = await entityController.patchEntityType(entityTypeId);
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


# Update Entity Type Permission

Updates the permission with the given Id for the entity type.

```ts
async updateEntityTypePermission(
  entityTypeId: string,
  permissionId: string,
  body?: EntityTypeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityTypeId` | `string` | Template, Required | The Id of the entityType that the permission belongs to. |
| `permissionId` | `string` | Template, Required | The Id of the permission to update. |
| `body` | [`EntityTypeRequest \| undefined`](../../doc/models/entity-type-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
const entityTypeId = 'entityTypeId0';

const permissionId = 'permissionId6';

try {
  const { result, ...httpResponse } = await entityController.updateEntityTypePermission(
  entityTypeId,
  permissionId
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


# Upsert Entity Grant

Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.

```ts
async upsertEntityGrant(
  entityId: string,
  xFusionAuthTenantId?: string,
  body?: EntityGrantRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entityId` | `string` | Template, Required | The Id of the Entity that the User/Entity is being granted access to. |
| `xFusionAuthTenantId` | `string \| undefined` | Header, Optional | The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped. |
| `body` | [`EntityGrantRequest \| undefined`](../../doc/models/entity-grant-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const entityId = 'entityId2';

try {
  const { result, ...httpResponse } = await entityController.upsertEntityGrant(entityId);
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


# Search Entity Grants

Searches Entity Grants with the specified criteria and pagination.

```ts
async searchEntityGrants(
  body?: EntityGrantSearchRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityGrantSearchResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EntityGrantSearchRequest \| undefined`](../../doc/models/entity-grant-search-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityGrantSearchResponse`](../../doc/models/entity-grant-search-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await entityController.searchEntityGrants();
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


# Retrieve Entity Types

Retrieves all the Entity Types.

```ts
async retrieveEntityTypes(
  requestOptions?: RequestOptions
): Promise<ApiResponse<EntityTypeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EntityTypeResponse`](../../doc/models/entity-type-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await entityController.retrieveEntityTypes();
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

