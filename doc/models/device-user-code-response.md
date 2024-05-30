
# Device User Code Response

## Structure

`DeviceUserCodeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string \| undefined` | Optional | - |
| `deviceInfo` | [`DeviceInfo \| undefined`](../../doc/models/device-info.md) | Optional | - |
| `expiresIn` | `number \| undefined` | Optional | - |
| `pendingIdPLink` | [`PendingIdPLink \| undefined`](../../doc/models/pending-id-p-link.md) | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `userCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "client_id": "client_id0",
  "deviceInfo": {
    "description": "description8",
    "lastAccessedAddress": "lastAccessedAddress6",
    "lastAccessedInstant": 28,
    "name": "name8",
    "type": "type2"
  },
  "expires_in": 132,
  "pendingIdPLink": {
    "displayName": "displayName6",
    "email": "email0",
    "identityProviderId": "000002b0-0000-0000-0000-000000000000",
    "identityProviderLinks": [
      {
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
        "displayName": "displayName6",
        "identityProviderId": "00000e62-0000-0000-0000-000000000000",
        "identityProviderName": "identityProviderName0",
        "identityProviderType": "Google"
      },
      {
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
        "displayName": "displayName6",
        "identityProviderId": "00000e62-0000-0000-0000-000000000000",
        "identityProviderName": "identityProviderName0",
        "identityProviderType": "Google"
      }
    ],
    "identityProviderName": "identityProviderName0"
  },
  "scope": "scope4"
}
```

