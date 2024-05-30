
# Web Authn Authenticator Authentication Response

The <i>authenticator's<i> response for the authentication ceremony in its encoded format

## Structure

`WebAuthnAuthenticatorAuthenticationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticatorData` | `string \| undefined` | Optional | - |
| `clientDataJSON` | `string \| undefined` | Optional | - |
| `signature` | `string \| undefined` | Optional | - |
| `userHandle` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "authenticatorData": "authenticatorData4",
  "clientDataJSON": "clientDataJSON0",
  "signature": "signature0",
  "userHandle": "userHandle0"
}
```

