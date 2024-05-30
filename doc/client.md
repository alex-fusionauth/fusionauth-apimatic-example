
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `apiKeyAuthCredentials` | [`ApiKeyAuthCredentials`](auth/custom-header-signature.md) | The credential object for apiKeyAuth |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  apiKeyAuthCredentials: {
    'Authorization': 'Authorization'
  },
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## FusionAuth API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| apiKey | Gets ApiKeyController |
| application | Gets ApplicationController |
| connector | Gets ConnectorController |
| consent | Gets ConsentController |
| email | Gets EmailController |
| wellKnown | Gets WellKnownController |
| entity | Gets EntityController |
| form | Gets FormController |
| group | Gets GroupController |
| identityProvider | Gets IdentityProviderController |
| integration | Gets IntegrationController |
| ipAcl | Gets IpAclController |
| jwt | Gets JwtController |
| key | Gets KeyController |
| lambda | Gets LambdaController |
| login | Gets LoginController |
| message | Gets MessageController |
| messenger | Gets MessengerController |
| oauth2 | Gets Oauth2Controller |
| passwordless | Gets PasswordlessController |
| reactor | Gets ReactorController |
| report | Gets ReportController |
| logout | Gets LogoutController |
| systemConfiguration | Gets SystemConfigurationController |
| tenant | Gets TenantController |
| user | Gets UserController |
| system | Gets SystemController |
| theme | Gets ThemeController |
| twoFactor | Gets TwoFactorController |
| userAction | Gets UserActionController |
| userActionReason | Gets UserActionReasonController |
| webauthn | Gets WebauthnController |
| webhook | Gets WebhookController |

