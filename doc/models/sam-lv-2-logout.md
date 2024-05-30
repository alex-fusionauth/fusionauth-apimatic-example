
# SAM Lv 2 Logout

## Structure

`SAMLv2Logout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `behavior` | [`SAMLLogoutBehaviorEnum \| undefined`](../../doc/models/saml-logout-behavior-enum.md) | Optional | - |
| `defaultVerificationKeyId` | `string \| undefined` | Optional | - |
| `keyId` | `string \| undefined` | Optional | - |
| `requireSignedRequests` | `boolean \| undefined` | Optional | - |
| `singleLogout` | [`SAMLv2SingleLogout \| undefined`](../../doc/models/sam-lv-2-single-logout.md) | Optional | - |
| `xmlSignatureC14nMethod` | [`CanonicalizationMethodEnum \| undefined`](../../doc/models/canonicalization-method-enum.md) | Optional | XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML. |

## Example (as JSON)

```json
{
  "behavior": "AllParticipants",
  "defaultVerificationKeyId": "0000004e-0000-0000-0000-000000000000",
  "keyId": "00000476-0000-0000-0000-000000000000",
  "requireSignedRequests": false,
  "singleLogout": {
    "keyId": "0000098c-0000-0000-0000-000000000000",
    "url": "url8",
    "xmlSignatureC14nMethod": "exclusive",
    "enabled": false
  }
}
```

