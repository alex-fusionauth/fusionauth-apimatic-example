
# Certificate Information

## Structure

`CertificateInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issuer` | `string \| undefined` | Optional | - |
| `md5Fingerprint` | `string \| undefined` | Optional | - |
| `serialNumber` | `string \| undefined` | Optional | - |
| `sha1Fingerprint` | `string \| undefined` | Optional | - |
| `sha1Thumbprint` | `string \| undefined` | Optional | - |
| `sha256Fingerprint` | `string \| undefined` | Optional | - |
| `sha256Thumbprint` | `string \| undefined` | Optional | - |
| `subject` | `string \| undefined` | Optional | - |
| `validFrom` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `validTo` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |

## Example (as JSON)

```json
{
  "validFrom": 1659380719000,
  "validTo": 1659380719000,
  "issuer": "issuer4",
  "md5Fingerprint": "md5Fingerprint4",
  "serialNumber": "serialNumber6",
  "sha1Fingerprint": "sha1Fingerprint4",
  "sha1Thumbprint": "sha1Thumbprint6"
}
```

