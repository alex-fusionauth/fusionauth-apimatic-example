
# Identity Provider Link Request

## Structure

`IdentityProviderLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identityProviderLink` | [`IdentityProviderLink \| undefined`](../../doc/models/identity-provider-link.md) | Optional | - |
| `pendingIdPLinkId` | `string \| undefined` | Optional | - |
| `eventInfo` | [`EventInfo \| undefined`](../../doc/models/event-info.md) | Optional | Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc). |

## Example (as JSON)

```json
{
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
  "pendingIdPLinkId": "pendingIdPLinkId4",
  "eventInfo": {
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceDescription": "deviceDescription8",
    "deviceName": "deviceName2",
    "deviceType": "deviceType6",
    "ipAddress": "ipAddress2"
  }
}
```

