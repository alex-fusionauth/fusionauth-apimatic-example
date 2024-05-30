
# CORS Configuration

## Structure

`CORSConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowCredentials` | `boolean \| undefined` | Optional | - |
| `allowedHeaders` | `string[] \| undefined` | Optional | - |
| `allowedMethods` | [`HTTPMethodEnum[] \| undefined`](../../doc/models/http-method-enum.md) | Optional | - |
| `allowedOrigins` | `string[] \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `exposedHeaders` | `string[] \| undefined` | Optional | - |
| `preflightMaxAgeInSeconds` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "allowCredentials": false,
  "allowedHeaders": [
    "allowedHeaders0",
    "allowedHeaders1"
  ],
  "allowedMethods": [
    "PUT",
    "POST",
    "GET"
  ],
  "allowedOrigins": [
    "allowedOrigins2",
    "allowedOrigins1"
  ],
  "debug": false
}
```

