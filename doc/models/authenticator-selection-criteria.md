
# Authenticator Selection Criteria

Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1.

## Structure

`AuthenticatorSelectionCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticatorAttachment` | [`AuthenticatorAttachmentEnum \| undefined`](../../doc/models/authenticator-attachment-enum.md) | Optional | Describes the <a href="https:www.w3.orgTRwebauthn-2#authenticator-attachment-modality">authenticator attachment modality<a>. |
| `requireResidentKey` | `boolean \| undefined` | Optional | - |
| `residentKey` | [`ResidentKeyRequirementEnum \| undefined`](../../doc/models/resident-key-requirement-enum.md) | Optional | Describes the Relying Party's requirements for <a href="https:www.w3.orgTRwebauthn-2#client-side-discoverable-credential">client-side  discoverable credentials<a> (formerly known as "resident keys") |
| `userVerification` | [`UserVerificationRequirementEnum \| undefined`](../../doc/models/user-verification-requirement-enum.md) | Optional | Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation. |

## Example (as JSON)

```json
{
  "authenticatorAttachment": "platform",
  "requireResidentKey": false,
  "residentKey": "required",
  "userVerification": "discouraged"
}
```

