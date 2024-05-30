
# Tenant SCIM Server Configuration

## Structure

`TenantSCIMServerConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientEntityTypeId` | `string \| undefined` | Optional | - |
| `schemas` | `Record<string, unknown> \| undefined` | Optional | - |
| `serverEntityTypeId` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "clientEntityTypeId": "00001006-0000-0000-0000-000000000000",
  "schemas": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "serverEntityTypeId": "0000030c-0000-0000-0000-000000000000",
  "enabled": false
}
```

