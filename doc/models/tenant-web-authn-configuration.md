
# Tenant Web Authn Configuration

Tenant-level configuration for WebAuthn

## Structure

`TenantWebAuthnConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bootstrapWorkflow` | [`TenantWebAuthnWorkflowConfiguration \| undefined`](../../doc/models/tenant-web-authn-workflow-configuration.md) | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `reauthenticationWorkflow` | [`TenantWebAuthnWorkflowConfiguration \| undefined`](../../doc/models/tenant-web-authn-workflow-configuration.md) | Optional | - |
| `relyingPartyId` | `string \| undefined` | Optional | - |
| `relyingPartyName` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "bootstrapWorkflow": {
    "authenticatorAttachmentPreference": "crossPlatform",
    "userVerificationRequirement": "required",
    "enabled": false
  },
  "debug": false,
  "reauthenticationWorkflow": {
    "authenticatorAttachmentPreference": "crossPlatform",
    "userVerificationRequirement": "required",
    "enabled": false
  },
  "relyingPartyId": "relyingPartyId6",
  "relyingPartyName": "relyingPartyName8"
}
```

