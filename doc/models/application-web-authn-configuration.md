
# Application Web Authn Configuration

Application-level configuration for WebAuthn

## Structure

`ApplicationWebAuthnConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bootstrapWorkflow` | [`ApplicationWebAuthnWorkflowConfiguration \| undefined`](../../doc/models/application-web-authn-workflow-configuration.md) | Optional | - |
| `reauthenticationWorkflow` | [`ApplicationWebAuthnWorkflowConfiguration \| undefined`](../../doc/models/application-web-authn-workflow-configuration.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "bootstrapWorkflow": {
    "enabled": false
  },
  "reauthenticationWorkflow": {
    "enabled": false
  },
  "enabled": false
}
```

