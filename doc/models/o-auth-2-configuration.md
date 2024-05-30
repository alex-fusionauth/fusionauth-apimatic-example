
# O Auth 2 Configuration

## Structure

`OAuth2Configuration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizedOriginURLs` | `string[] \| undefined` | Optional | - |
| `authorizedRedirectURLs` | `string[] \| undefined` | Optional | - |
| `authorizedURLValidationPolicy` | [`Oauth2AuthorizedURLValidationPolicyEnum \| undefined`](../../doc/models/oauth-2-authorized-url-validation-policy-enum.md) | Optional | - |
| `clientAuthenticationPolicy` | [`ClientAuthenticationPolicyEnum \| undefined`](../../doc/models/client-authentication-policy-enum.md) | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `consentMode` | [`OAuthScopeConsentModeEnum \| undefined`](../../doc/models/o-auth-scope-consent-mode-enum.md) | Optional | Controls the policy for requesting user permission to grant access to requested scopes during an OAuth workflow  for a third-party application. |
| `debug` | `boolean \| undefined` | Optional | - |
| `deviceVerificationURL` | `string \| undefined` | Optional | - |
| `enabledGrants` | `unknown[] \| undefined` | Optional | **Constraints**: *Unique Items Required* |
| `generateRefreshTokens` | `boolean \| undefined` | Optional | - |
| `logoutBehavior` | [`LogoutBehaviorEnum \| undefined`](../../doc/models/logout-behavior-enum.md) | Optional | - |
| `logoutURL` | `string \| undefined` | Optional | - |
| `proofKeyForCodeExchangePolicy` | [`ProofKeyForCodeExchangePolicyEnum \| undefined`](../../doc/models/proof-key-for-code-exchange-policy-enum.md) | Optional | - |
| `providedScopePolicy` | [`ProvidedScopePolicy \| undefined`](../../doc/models/provided-scope-policy.md) | Optional | The handling policy for scopes provided by FusionAuth |
| `relationship` | [`OAuthApplicationRelationshipEnum \| undefined`](../../doc/models/o-auth-application-relationship-enum.md) | Optional | The application's relationship to the authorization server. First-party applications will be granted implicit permission for requested scopes.  Third-party applications will use the {@link OAuthScopeConsentMode} policy. |
| `requireClientAuthentication` | `boolean \| undefined` | Optional | - |
| `requireRegistration` | `boolean \| undefined` | Optional | - |
| `scopeHandlingPolicy` | [`OAuthScopeHandlingPolicyEnum \| undefined`](../../doc/models/o-auth-scope-handling-policy-enum.md) | Optional | Controls the policy for whether OAuth workflows will more strictly adhere to the OAuth and OIDC specification  or run in backwards compatibility mode. |
| `unknownScopePolicy` | [`UnknownScopePolicyEnum \| undefined`](../../doc/models/unknown-scope-policy-enum.md) | Optional | Policy for handling unknown OAuth scopes in the request |

## Example (as JSON)

```json
{
  "authorizedOriginURLs": [
    "authorizedOriginURLs3",
    "authorizedOriginURLs4",
    "authorizedOriginURLs5"
  ],
  "authorizedRedirectURLs": [
    "authorizedRedirectURLs3",
    "authorizedRedirectURLs4"
  ],
  "authorizedURLValidationPolicy": "AllowWildcards",
  "clientAuthenticationPolicy": "Required",
  "clientId": "clientId0"
}
```

