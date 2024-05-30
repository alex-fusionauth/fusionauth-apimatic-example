
# User Login Suspicious Event

Models the User Login event that is suspicious.

## Structure

`UserLoginSuspiciousEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threatsDetected` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
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
  "threatsDetected": [
    {
      "key1": "val1",
      "key2": "val2"
    },
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "applicationId": "00001df2-0000-0000-0000-000000000000",
  "authenticationType": "authenticationType8",
  "connectorId": "00000d8a-0000-0000-0000-000000000000",
  "identityProviderId": "00000148-0000-0000-0000-000000000000"
}
```

