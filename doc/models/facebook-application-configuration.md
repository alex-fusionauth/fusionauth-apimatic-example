
# Facebook Application Configuration

## Structure

`FacebookApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | - |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `fields` | `string \| undefined` | Optional | - |
| `loginMethod` | [`IdentityProviderLoginMethodEnum \| undefined`](../../doc/models/identity-provider-login-method-enum.md) | Optional | - |
| `permissions` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "appId": "appId8",
  "buttonText": "buttonText6",
  "client_secret": "client_secret0",
  "fields": "fields0",
  "loginMethod": "UseRedirect"
}
```

