
# Access Token

## Structure

`AccessToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expiresIn` | `number \| undefined` | Optional | - |
| `idToken` | `string \| undefined` | Optional | - |
| `refreshToken` | `string \| undefined` | Optional | - |
| `refreshTokenId` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `accessToken` | `string \| undefined` | Optional | - |
| `tokenType` | [`TokenTypeEnum \| undefined`](../../doc/models/token-type-enum.md) | Optional | <ul>  <li>Bearer Token type as defined by <a href="https:tools.ietf.orghtmlrfc6750">RFC 6750<a>.<li>  <li>MAC Token type as referenced by <a href="https:tools.ietf.orghtmlrfc6749">RFC 6749<a> and  <a href="https:tools.ietf.orghtmldraft-ietf-oauth-v2-http-mac-05">  Draft RFC on OAuth 2.0 Message Authentication Code (MAC) Tokens<a>  <li>  <ul><br> |
| `userId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "expires_in": 164,
  "id_token": "id_token2",
  "refresh_token": "refresh_token0",
  "refresh_token_id": "000020f2-0000-0000-0000-000000000000",
  "scope": "scope2"
}
```

