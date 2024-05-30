
# Two Factor Login Request

## Structure

`TwoFactorLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | - |
| `trustComputer` | `boolean \| undefined` | Optional | - |
| `twoFactorId` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "code": "code2",
  "trustComputer": false,
  "twoFactorId": "twoFactorId6",
  "userId": "00000b08-0000-0000-0000-000000000000",
  "applicationId": "000017b0-0000-0000-0000-000000000000"
}
```

