
# Public Key Credential Parameters

Supply information on credential type and algorithm to the <i>authenticator<i>.

## Structure

`PublicKeyCredentialParameters`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alg` | [`CoseAlgorithmIdentifierEnum \| undefined`](../../doc/models/cose-algorithm-identifier-enum.md) | Optional | A number identifying a cryptographic algorithm. Values should be registered with the <a  href="https:www.iana.orgassignmentscosecose.xhtml#algorithms">IANA COSE Algorithms registry<a> |
| `type` | [`PublicKeyCredentialTypeEnum \| undefined`](../../doc/models/public-key-credential-type-enum.md) | Optional | Defines valid credential types. This is an extension point in the WebAuthn spec. The only defined value at this time is "public-key" |

## Example (as JSON)

```json
{
  "alg": "RS256",
  "type": "publicKey"
}
```

