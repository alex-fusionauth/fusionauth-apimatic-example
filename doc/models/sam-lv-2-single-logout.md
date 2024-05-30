
# SAM Lv 2 Single Logout

## Structure

`SAMLv2SingleLogout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `keyId` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `xmlSignatureC14nMethod` | [`CanonicalizationMethodEnum \| undefined`](../../doc/models/canonicalization-method-enum.md) | Optional | XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML. |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "keyId": "000012a2-0000-0000-0000-000000000000",
  "url": "url4",
  "xmlSignatureC14nMethod": "inclusive",
  "enabled": false
}
```

