
# SAM Lv 2 Configuration

## Structure

`SAMLv2Configuration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `assertionEncryptionConfiguration` | [`SAMLv2AssertionEncryptionConfiguration \| undefined`](../../doc/models/sam-lv-2-assertion-encryption-configuration.md) | Optional | - |
| `audience` | `string \| undefined` | Optional | - |
| `authorizedRedirectURLs` | `string[] \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `defaultVerificationKeyId` | `string \| undefined` | Optional | - |
| `initiatedLogin` | [`SAMLv2IdPInitiatedLoginConfiguration \| undefined`](../../doc/models/sam-lv-2-id-p-initiated-login-configuration.md) | Optional | IdP Initiated login configuration |
| `issuer` | `string \| undefined` | Optional | - |
| `keyId` | `string \| undefined` | Optional | - |
| `loginHintConfiguration` | [`LoginHintConfiguration \| undefined`](../../doc/models/login-hint-configuration.md) | Optional | - |
| `logout` | [`SAMLv2Logout \| undefined`](../../doc/models/sam-lv-2-logout.md) | Optional | - |
| `logoutURL` | `string \| undefined` | Optional | - |
| `requireSignedRequests` | `boolean \| undefined` | Optional | - |
| `xmlSignatureC14nMethod` | [`CanonicalizationMethodEnum \| undefined`](../../doc/models/canonicalization-method-enum.md) | Optional | XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML. |
| `xmlSignatureLocation` | [`XMLSignatureLocationEnum \| undefined`](../../doc/models/xml-signature-location-enum.md) | Optional | - |
| `callbackURL` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "assertionEncryptionConfiguration": {
    "digestAlgorithm": "digestAlgorithm6",
    "encryptionAlgorithm": "encryptionAlgorithm8",
    "keyLocation": "keyLocation0",
    "keyTransportAlgorithm": "keyTransportAlgorithm8",
    "keyTransportEncryptionKeyId": "00002448-0000-0000-0000-000000000000"
  },
  "audience": "audience4",
  "authorizedRedirectURLs": [
    "authorizedRedirectURLs5",
    "authorizedRedirectURLs4"
  ],
  "debug": false,
  "defaultVerificationKeyId": "0000027a-0000-0000-0000-000000000000"
}
```

