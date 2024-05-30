
# Web Authn Register Complete Request

Request to complete the WebAuthn registration ceremony for a new credential,.

## Structure

`WebAuthnRegisterCompleteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credential` | [`WebAuthnPublicKeyRegistrationRequest \| undefined`](../../doc/models/web-authn-public-key-registration-request.md) | Optional | Request to register a new public key with WebAuthn |
| `origin` | `string \| undefined` | Optional | - |
| `rpId` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "credential": {
    "clientExtensionResults": {
      "credProps": {
        "rk": false
      }
    },
    "id": "id6",
    "rpId": "rpId0",
    "response": {
      "attestationObject": "attestationObject6",
      "clientDataJSON": "clientDataJSON2"
    },
    "transports": [
      "transports6",
      "transports5"
    ]
  },
  "origin": "origin6",
  "rpId": "rpId4",
  "userId": "00001f38-0000-0000-0000-000000000000"
}
```

