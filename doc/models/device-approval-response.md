
# Device Approval Response

## Structure

`DeviceApprovalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceGrantStatus` | `string \| undefined` | Optional | - |
| `deviceInfo` | [`DeviceInfo \| undefined`](../../doc/models/device-info.md) | Optional | - |
| `identityProviderLink` | [`IdentityProviderLink \| undefined`](../../doc/models/identity-provider-link.md) | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "deviceGrantStatus": "deviceGrantStatus2",
  "deviceInfo": {
    "description": "description8",
    "lastAccessedAddress": "lastAccessedAddress6",
    "lastAccessedInstant": 28,
    "name": "name8",
    "type": "type2"
  },
  "identityProviderLink": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      },
      "key1": {
        "key1": "val1",
        "key2": "val2"
      },
      "key2": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "displayName": "displayName2",
    "identityProviderId": "00000ee4-0000-0000-0000-000000000000",
    "identityProviderName": "identityProviderName4",
    "identityProviderType": "SAMLv2IdPInitiated"
  },
  "tenantId": "00000dc0-0000-0000-0000-000000000000",
  "userId": "0000211a-0000-0000-0000-000000000000"
}
```

