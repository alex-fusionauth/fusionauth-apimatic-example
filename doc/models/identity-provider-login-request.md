
# Identity Provider Login Request

Login API request object used for login to third-party systems (i.e. Login with Facebook).

## Structure

`IdentityProviderLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, string> \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `noLink` | `boolean \| undefined` | Optional | - |
| `encodedJWT` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "key0": "data1",
    "key1": "data2",
    "key2": "data3"
  },
  "identityProviderId": "00001e44-0000-0000-0000-000000000000",
  "noLink": false,
  "encodedJWT": "encodedJWT4",
  "applicationId": "000013de-0000-0000-0000-000000000000"
}
```

