
# Web Authn Start Request

API request to start a WebAuthn authentication ceremony

## Structure

`WebAuthnStartRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string \| undefined` | Optional | - |
| `credentialId` | `string \| undefined` | Optional | - |
| `loginId` | `string \| undefined` | Optional | - |
| `state` | `Record<string, unknown> \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `workflow` | [`WebAuthnWorkflowEnum \| undefined`](../../doc/models/web-authn-workflow-enum.md) | Optional | Identifies the WebAuthn workflow. This will affect the parameters used for credential creation  and request based on the Tenant configuration. |

## Example (as JSON)

```json
{
  "applicationId": "00002686-0000-0000-0000-000000000000",
  "credentialId": "00001ad8-0000-0000-0000-000000000000",
  "loginId": "loginId6",
  "state": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "userId": "000019de-0000-0000-0000-000000000000"
}
```

