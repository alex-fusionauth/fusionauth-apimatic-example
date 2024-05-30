
# Public Key Credential Descriptor

Contains attributes for the Relying Party to refer to an existing public key credential as an input parameter.

## Structure

`PublicKeyCredentialDescriptor`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `transports` | `string[] \| undefined` | Optional | - |
| `type` | [`PublicKeyCredentialTypeEnum \| undefined`](../../doc/models/public-key-credential-type-enum.md) | Optional | Defines valid credential types. This is an extension point in the WebAuthn spec. The only defined value at this time is "public-key" |

## Example (as JSON)

```json
{
  "id": "id6",
  "transports": [
    "transports2",
    "transports1"
  ],
  "type": "publicKey"
}
```

