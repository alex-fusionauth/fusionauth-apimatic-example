
# Web Authn Public Key Registration Request

Request to register a new public key with WebAuthn

## Structure

`WebAuthnPublicKeyRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientExtensionResults` | [`WebAuthnExtensionsClientOutputs \| undefined`](../../doc/models/web-authn-extensions-client-outputs.md) | Optional | Contains extension output for requested extensions during a WebAuthn ceremony |
| `id` | `string \| undefined` | Optional | - |
| `rpId` | `string \| undefined` | Optional | - |
| `response` | [`WebAuthnAuthenticatorRegistrationResponse \| undefined`](../../doc/models/web-authn-authenticator-registration-response.md) | Optional | The <i>authenticator's<i> response for the registration ceremony in its encoded format |
| `transports` | `string[] \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "clientExtensionResults": {
    "credProps": {
      "rk": false
    }
  },
  "id": "id8",
  "rpId": "rpId2",
  "response": {
    "attestationObject": "attestationObject6",
    "clientDataJSON": "clientDataJSON2"
  },
  "transports": [
    "transports4",
    "transports3"
  ]
}
```

