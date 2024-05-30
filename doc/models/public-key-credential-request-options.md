
# Public Key Credential Request Options

Provides the <i>authenticator<i> with the data it needs to generate an assertion.

## Structure

`PublicKeyCredentialRequestOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowCredentials` | [`PublicKeyCredentialDescriptor[] \| undefined`](../../doc/models/public-key-credential-descriptor.md) | Optional | - |
| `challenge` | `string \| undefined` | Optional | - |
| `rpId` | `string \| undefined` | Optional | - |
| `timeout` | `bigint \| undefined` | Optional | - |
| `userVerification` | [`UserVerificationRequirementEnum \| undefined`](../../doc/models/user-verification-requirement-enum.md) | Optional | Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation. |

## Example (as JSON)

```json
{
  "allowCredentials": [
    {
      "id": "id0",
      "transports": [
        "transports4",
        "transports5"
      ],
      "type": "publicKey"
    },
    {
      "id": "id0",
      "transports": [
        "transports4",
        "transports5"
      ],
      "type": "publicKey"
    },
    {
      "id": "id0",
      "transports": [
        "transports4",
        "transports5"
      ],
      "type": "publicKey"
    }
  ],
  "challenge": "challenge8",
  "rpId": "rpId6",
  "timeout": 236,
  "userVerification": "preferred"
}
```

