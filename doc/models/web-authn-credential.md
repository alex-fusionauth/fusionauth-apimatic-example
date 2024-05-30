
# Web Authn Credential

A User's WebAuthnCredential. Contains all data required to complete WebAuthn authentication ceremonies.

## Structure

`WebAuthnCredential`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `algorithm` | [`CoseAlgorithmIdentifierEnum \| undefined`](../../doc/models/cose-algorithm-identifier-enum.md) | Optional | A number identifying a cryptographic algorithm. Values should be registered with the <a  href="https:www.iana.orgassignmentscosecose.xhtml#algorithms">IANA COSE Algorithms registry<a> |
| `attestationType` | [`AttestationTypeEnum \| undefined`](../../doc/models/attestation-type-enum.md) | Optional | Used to indicate what type of attestation was included in the authenticator response for a given WebAuthn credential at the time it was created |
| `authenticatorSupportsUserVerification` | `boolean \| undefined` | Optional | - |
| `credentialId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `discoverable` | `boolean \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUseInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `publicKey` | `string \| undefined` | Optional | - |
| `relyingPartyId` | `string \| undefined` | Optional | - |
| `signCount` | `number \| undefined` | Optional | - |
| `tenantId` | `string \| undefined` | Optional | - |
| `transports` | `string[] \| undefined` | Optional | - |
| `userAgent` | `string \| undefined` | Optional | - |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUseInstant": 1659380719000,
  "algorithm": "PS384",
  "attestationType": "none",
  "authenticatorSupportsUserVerification": false,
  "credentialId": "credentialId6",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

