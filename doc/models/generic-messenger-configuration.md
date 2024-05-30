
# Generic Messenger Configuration

## Structure

`GenericMessengerConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectTimeout` | `number \| undefined` | Optional | - |
| `headers` | `unknown \| undefined` | Optional | Type for webhook headers. |
| `httpAuthenticationPassword` | `string \| undefined` | Optional | - |
| `httpAuthenticationUsername` | `string \| undefined` | Optional | - |
| `readTimeout` | `number \| undefined` | Optional | - |
| `sslCertificate` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `transport` | `string \| undefined` | Optional | - |
| `type` | [`MessengerTypeEnum \| undefined`](../../doc/models/messenger-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "connectTimeout": 118,
  "headers": {
    "key1": "val1",
    "key2": "val2"
  },
  "httpAuthenticationPassword": "httpAuthenticationPassword4",
  "httpAuthenticationUsername": "httpAuthenticationUsername4",
  "readTimeout": 158
}
```

