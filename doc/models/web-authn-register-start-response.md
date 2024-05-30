
# Web Authn Register Start Response

API response for starting a WebAuthn registration ceremony

## Structure

`WebAuthnRegisterStartResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `options` | [`PublicKeyCredentialCreationOptions \| undefined`](../../doc/models/public-key-credential-creation-options.md) | Optional | Allows the Relying Party to specify desired attributes of a new credential. |

## Example (as JSON)

```json
{
  "options": {
    "attestation": "direct",
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
      }
    ],
    "extensions": {
      "credProps": false
    }
  }
}
```

