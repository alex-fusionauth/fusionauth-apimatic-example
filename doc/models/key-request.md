
# Key Request

Key API request object.

## Structure

`KeyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | [`Key \| undefined`](../../doc/models/key.md) | Optional | Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc. |

## Example (as JSON)

```json
{
  "key": {
    "algorithm": "ES256",
    "certificate": "certificate8",
    "certificateInformation": {
      "issuer": "issuer2",
      "md5Fingerprint": "md5Fingerprint2",
      "serialNumber": "serialNumber4",
      "sha1Fingerprint": "sha1Fingerprint6",
      "sha1Thumbprint": "sha1Thumbprint4"
    },
    "expirationInstant": 196,
    "hasPrivateKey": false
  }
}
```

