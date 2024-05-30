
# Key Search Response

Key search response

## Structure

`KeySearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keys` | [`Key[] \| undefined`](../../doc/models/key.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "keys": [
    {
      "algorithm": "HS512",
      "certificate": "certificate6",
      "certificateInformation": {
        "issuer": "issuer2",
        "md5Fingerprint": "md5Fingerprint2",
        "serialNumber": "serialNumber4",
        "sha1Fingerprint": "sha1Fingerprint6",
        "sha1Thumbprint": "sha1Thumbprint4"
      },
      "expirationInstant": 36,
      "hasPrivateKey": false
    }
  ],
  "total": 246
}
```

