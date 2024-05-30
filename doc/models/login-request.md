
# Login Request

Login API request object.

## Structure

`LoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loginId` | `string \| undefined` | Optional | - |
| `oneTimePassword` | `string \| undefined` | Optional | - |
| `password` | `string \| undefined` | Optional | - |
| `twoFactorTrustId` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "loginId": "loginId2",
  "oneTimePassword": "oneTimePassword6",
  "password": "password8",
  "twoFactorTrustId": "twoFactorTrustId6",
  "applicationId": "000013dc-0000-0000-0000-000000000000"
}
```

