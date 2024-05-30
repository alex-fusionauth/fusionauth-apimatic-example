
# Tenant Web Authn Workflow Configuration

## Structure

`TenantWebAuthnWorkflowConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticatorAttachmentPreference` | [`AuthenticatorAttachmentPreferenceEnum \| undefined`](../../doc/models/authenticator-attachment-preference-enum.md) | Optional | Describes the authenticator attachment modality preference for a WebAuthn workflow. See {@link AuthenticatorAttachment} |
| `userVerificationRequirement` | [`UserVerificationRequirementEnum \| undefined`](../../doc/models/user-verification-requirement-enum.md) | Optional | Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation. |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authenticatorAttachmentPreference": "platform",
  "userVerificationRequirement": "discouraged",
  "enabled": false
}
```

