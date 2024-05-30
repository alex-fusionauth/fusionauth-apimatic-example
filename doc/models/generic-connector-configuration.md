
# Generic Connector Configuration

Models a generic connector.

## Structure

`GenericConnectorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationURL` | `string \| undefined` | Optional | - |
| `connectTimeout` | `number \| undefined` | Optional | - |
| `headers` | `unknown \| undefined` | Optional | Type for webhook headers. |
| `httpAuthenticationPassword` | `string \| undefined` | Optional | - |
| `httpAuthenticationUsername` | `string \| undefined` | Optional | - |
| `readTimeout` | `number \| undefined` | Optional | - |
| `sslCertificateKeyId` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `type` | [`ConnectorTypeEnum \| undefined`](../../doc/models/connector-type-enum.md) | Optional | The types of connectors. This enum is stored as an ordinal on the <code>identities<code> table, order must be maintained. |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "authenticationURL": "authenticationURL6",
  "connectTimeout": 186,
  "headers": {
    "key1": "val1",
    "key2": "val2"
  },
  "httpAuthenticationPassword": "httpAuthenticationPassword2",
  "httpAuthenticationUsername": "httpAuthenticationUsername2"
}
```

