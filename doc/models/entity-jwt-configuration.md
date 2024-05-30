
# Entity JWT Configuration

JWT Configuration for entities.

## Structure

`EntityJWTConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessTokenKeyId` | `string \| undefined` | Optional | - |
| `timeToLiveInSeconds` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "accessTokenKeyId": "00001ada-0000-0000-0000-000000000000",
  "timeToLiveInSeconds": 70,
  "enabled": false
}
```

