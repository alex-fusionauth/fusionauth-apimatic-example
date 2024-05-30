
# SAM Lv 2 Identity Provider

SAML v2 identity provider configuration.

## Structure

`SAMLv2IdentityProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domains` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `assertionConfiguration` | [`SAMLv2AssertionConfiguration \| undefined`](../../doc/models/sam-lv-2-assertion-configuration.md) | Optional | - |
| `buttonImageURL` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `idpEndpoint` | `string \| undefined` | Optional | - |
| `idpInitiatedConfiguration` | [`SAMLv2IdpInitiatedConfiguration \| undefined`](../../doc/models/sam-lv-2-idp-initiated-configuration.md) | Optional | Config for regular SAML IDP configurations that support IdP initiated requests |
| `issuer` | `string \| undefined` | Optional | - |
| `loginHintConfiguration` | [`LoginHintConfiguration \| undefined`](../../doc/models/login-hint-configuration.md) | Optional | - |
| `nameIdFormat` | `string \| undefined` | Optional | - |
| `postRequest` | `boolean \| undefined` | Optional | - |
| `requestSigningKeyId` | `string \| undefined` | Optional | - |
| `signRequest` | `boolean \| undefined` | Optional | - |
| `xmlSignatureC14nMethod` | [`CanonicalizationMethodEnum \| undefined`](../../doc/models/canonicalization-method-enum.md) | Optional | XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML. |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `applicationConfiguration` | [`Record<string, SAMLv2ApplicationConfiguration> \| undefined`](../../doc/models/sam-lv-2-application-configuration.md) | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lambdaConfiguration` | [`ProviderLambdaConfiguration \| undefined`](../../doc/models/provider-lambda-configuration.md) | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `linkingStrategy` | [`IdentityProviderLinkingStrategyEnum \| undefined`](../../doc/models/identity-provider-linking-strategy-enum.md) | Optional | The IdP behavior when no user link has been made yet. |
| `name` | `string \| undefined` | Optional | - |
| `tenantConfiguration` | [`Record<string, IdentityProviderTenantConfiguration> \| undefined`](../../doc/models/identity-provider-tenant-configuration.md) | Optional | - |
| `type` | [`IdentityProviderTypeEnum`](../../doc/models/identity-provider-type-enum.md) | Required | - |
| `emailClaim` | `string \| undefined` | Optional | - |
| `keyId` | `string \| undefined` | Optional | - |
| `uniqueIdClaim` | `string \| undefined` | Optional | - |
| `useNameIdForEmail` | `boolean \| undefined` | Optional | - |
| `usernameClaim` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "type": "ExternalJWT",
  "domains": [
    {
      "key1": "val1",
      "key2": "val2"
    }
  ],
  "assertionConfiguration": {
    "destination": {
      "alternates": [
        "alternates9",
        "alternates0"
      ],
      "policy": "Disabled"
    }
  },
  "buttonImageURL": "buttonImageURL6",
  "buttonText": "buttonText0",
  "idpEndpoint": "idpEndpoint4"
}
```

