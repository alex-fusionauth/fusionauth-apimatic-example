
# Web Authn Login Request

Request to complete the WebAuthn registration ceremony

## Structure

`WebAuthnLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credential` | [`WebAuthnPublicKeyAuthenticationRequest \| undefined`](../../doc/models/web-authn-public-key-authentication-request.md) | Optional | Request to authenticate with WebAuthn |
| `origin` | `string \| undefined` | Optional | - |
| `rpId` | `string \| undefined` | Optional | - |
| `twoFactorTrustId` | `string \| undefined` | Optional | - |
| `applicationId` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `metaData` | [`MetaData \| undefined`](../../doc/models/meta-data.md) | Optional | - |
| `newDevice` | `boolean \| undefined` | Optional | - |
| `noJWT` | `boolean \| undefined` | Optional | - |

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
      "authenticatorData": "authenticatorData2",
      "clientDataJSON": "clientDataJSON2",
      "signature": "signature8",
      "userHandle": "userHandle2"
    },
    "type": "type6"
  },
  "origin": "origin4",
  "rpId": "rpId6",
  "twoFactorTrustId": "twoFactorTrustId0",
  "applicationId": "00000870-0000-0000-0000-000000000000"
}
```

