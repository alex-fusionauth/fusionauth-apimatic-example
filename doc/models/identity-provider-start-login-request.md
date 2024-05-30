
# Identity Provider Start Login Request

## Structure

`IdentityProviderStartLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, string> \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "key0": "data1"
  },
  "identityProviderId": "00002510-0000-0000-0000-000000000000",
  "loginId": "loginId0",
  "state": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "applicationId": "00001aaa-0000-0000-0000-000000000000"
}
```

