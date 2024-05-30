
# Web Authn Register Start Request

API request to start a WebAuthn registration ceremony

## Structure

`WebAuthnRegisterStartRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `userAgent` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |
| `workflow` | [`WebAuthnWorkflowEnum \| undefined`](../../doc/models/web-authn-workflow-enum.md) | Optional | Identifies the WebAuthn workflow. This will affect the parameters used for credential creation  and request based on the Tenant configuration. |

## Example (as JSON)

```json
{
  "displayName": "displayName4",
  "name": "name8",
  "userAgent": "userAgent4",
  "userId": "000004ae-0000-0000-0000-000000000000",
  "workflow": "bootstrap"
}
```

