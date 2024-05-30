
# Key

Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc.

## Structure

`Key`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `algorithm` | [`KeyAlgorithmEnum \| undefined`](../../doc/models/key-algorithm-enum.md) | Optional | - |
| `certificate` | `string \| undefined` | Optional | - |
| `certificateInformation` | [`CertificateInformation \| undefined`](../../doc/models/certificate-information.md) | Optional | - |
| `expirationInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `hasPrivateKey` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `issuer` | `string \| undefined` | Optional | - |
| `kid` | `string \| undefined` | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `length` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `privateKey` | `string \| undefined` | Optional | - |
| `publicKey` | `string \| undefined` | Optional | - |
| `secret` | `string \| undefined` | Optional | - |
| `type` | [`KeyTypeEnum \| undefined`](../../doc/models/key-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "expirationInstant": 1659380719000,
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "algorithm": "HS512",
  "certificate": "certificate2",
  "certificateInformation": {
    "issuer": "issuer2",
    "md5Fingerprint": "md5Fingerprint2",
    "serialNumber": "serialNumber4",
    "sha1Fingerprint": "sha1Fingerprint6",
    "sha1Thumbprint": "sha1Thumbprint4"
  },
  "hasPrivateKey": false
}
```

