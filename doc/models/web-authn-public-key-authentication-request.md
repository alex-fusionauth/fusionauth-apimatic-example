
# Web Authn Public Key Authentication Request

Request to authenticate with WebAuthn

## Structure

`WebAuthnPublicKeyAuthenticationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientExtensionResults` | [`WebAuthnExtensionsClientOutputs \| undefined`](../../doc/models/web-authn-extensions-client-outputs.md) | Optional | Contains extension output for requested extensions during a WebAuthn ceremony |
| `id` | `string \| undefined` | Optional | - |
| `rpId` | `string \| undefined` | Optional | - |
| `response` | [`WebAuthnAuthenticatorAuthenticationResponse \| undefined`](../../doc/models/web-authn-authenticator-authentication-response.md) | Optional | The <i>authenticator's<i> response for the authentication ceremony in its encoded format |
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
  "rpId": "rpId8",
  "response": {
    "authenticatorData": "authenticatorData2",
    "clientDataJSON": "clientDataJSON2",
    "signature": "signature8",
    "userHandle": "userHandle2"
  },
  "type": "type2"
}
```

