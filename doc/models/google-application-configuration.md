
# Google Application Configuration

## Structure

`GoogleApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `loginMethod` | [`IdentityProviderLoginMethodEnum \| undefined`](../../doc/models/identity-provider-login-method-enum.md) | Optional | - |
| `properties` | [`GoogleIdentityProviderProperties \| undefined`](../../doc/models/google-identity-provider-properties.md) | Optional | Google social login provider parameters. |
| `scope` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "buttonText": "buttonText0",
  "client_id": "client_id0",
  "client_secret": "client_secret6",
  "loginMethod": "UsePopup",
  "properties": {
    "api": "api4",
    "button": "button4"
  }
}
```

