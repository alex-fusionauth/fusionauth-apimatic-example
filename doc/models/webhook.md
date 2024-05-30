
# Webhook

A server where events are sent. This includes user action events and any other events sent by FusionAuth.

## Structure

`Webhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectTimeout` | `number \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `eventsEnabled` | `Record<string, boolean> \| undefined` | Optional | - |
| `global` | `boolean \| undefined` | Optional | - |
| `headers` | `unknown \| undefined` | Optional | Type for webhook headers. |
| `httpAuthenticationPassword` | `string \| undefined` | Optional | - |
| `httpAuthenticationUsername` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `readTimeout` | `number \| undefined` | Optional | - |
| `signatureConfiguration` | [`WebhookSignatureConfiguration \| undefined`](../../doc/models/webhook-signature-configuration.md) | Optional | Configuration for signing webhooks. |
| `sslCertificate` | `string \| undefined` | Optional | - |
| `sslCertificateKeyId` | `string \| undefined` | Optional | - |
| `tenantIds` | `string[] \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "connectTimeout": 144,
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "description": "description4",
  "eventsEnabled": {
    "key0": false,
    "key1": true,
    "key2": false
  },
  "global": false
}
```

