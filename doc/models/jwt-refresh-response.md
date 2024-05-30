
# JWT Refresh Response

API response for refreshing a JWT with a Refresh Token.  <p>  Using a different response object from RefreshTokenResponse because the retrieve response will return an object for refreshToken, and this is a  string.

## Structure

`JWTRefreshResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refreshToken` | `string \| undefined` | Optional | - |
| `refreshTokenId` | `string \| undefined` | Optional | - |
| `token` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "refreshToken": "refreshToken4",
  "refreshTokenId": "00000716-0000-0000-0000-000000000000",
  "token": "token0"
}
```

