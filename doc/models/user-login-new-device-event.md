
# User Login New Device Event

Models the User Login event for a new device (un-recognized)

## Structure

`UserLoginNewDeviceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `authenticationType` | `string \| undefined` | Optional | - |
| `connectorId` | `string \| undefined` | Optional | - |
| `identityProviderId` | `string \| undefined` | Optional | - |
| `identityProviderName` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `user` | [`User \| undefined`](../../doc/models/user.md) | Optional | The global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc. |

## Example (as JSON)

```json
{
  "applicationId": "000024b0-0000-0000-0000-000000000000",
  "authenticationType": "authenticationType4",
  "connectorId": "00001448-0000-0000-0000-000000000000",
  "identityProviderId": "00000806-0000-0000-0000-000000000000",
  "identityProviderName": "identityProviderName6"
}
```

