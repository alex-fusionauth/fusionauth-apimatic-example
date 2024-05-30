
# Public Key Credential Creation Options

Allows the Relying Party to specify desired attributes of a new credential.

## Structure

`PublicKeyCredentialCreationOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attestation` | [`AttestationConveyancePreferenceEnum \| undefined`](../../doc/models/attestation-conveyance-preference-enum.md) | Optional | Used to communicate whether and how authenticator attestation should be delivered to the Relying Party |
| `authenticatorSelection` | [`AuthenticatorSelectionCriteria \| undefined`](../../doc/models/authenticator-selection-criteria.md) | Optional | Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1. |
| `challenge` | `string \| undefined` | Optional | - |
| `excludeCredentials` | [`PublicKeyCredentialDescriptor[] \| undefined`](../../doc/models/public-key-credential-descriptor.md) | Optional | - |
| `extensions` | [`WebAuthnRegistrationExtensionOptions \| undefined`](../../doc/models/web-authn-registration-extension-options.md) | Optional | Options to request extensions during credential registration |
| `pubKeyCredParams` | [`PublicKeyCredentialParameters[] \| undefined`](../../doc/models/public-key-credential-parameters.md) | Optional | - |
| `rp` | [`PublicKeyCredentialRelyingPartyEntity \| undefined`](../../doc/models/public-key-credential-relying-party-entity.md) | Optional | Supply additional information about the Relying Party when creating a new credential |
| `timeout` | `bigint \| undefined` | Optional | - |
| `user` | [`PublicKeyCredentialUserEntity \| undefined`](../../doc/models/public-key-credential-user-entity.md) | Optional | Supply additional information about the user account when creating a new credential |

## Example (as JSON)

```json
{
  "attestation": "none",
  "authenticatorSelection": {
    "authenticatorAttachment": "platform",
    "requireResidentKey": false,
    "residentKey": "preferred",
    "userVerification": "preferred"
  },
  "challenge": "challenge0",
  "excludeCredentials": [
    {
      "id": "id2",
      "transports": [
        "transports8",
        "transports7",
        "transports6"
      ],
      "type": "publicKey"
    },
    {
      "id": "id2",
      "transports": [
        "transports8",
        "transports7",
        "transports6"
      ],
      "type": "publicKey"
    },
    {
      "id": "id2",
      "transports": [
        "transports8",
        "transports7",
        "transports6"
      ],
      "type": "publicKey"
    }
  ],
  "extensions": {
    "credProps": false
  }
}
```

