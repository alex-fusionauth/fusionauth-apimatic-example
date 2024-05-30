
# LDAP Connector Configuration

Models an LDAP connector.

## Structure

`LDAPConnectorConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationURL` | `string \| undefined` | Optional | - |
| `baseStructure` | `string \| undefined` | Optional | - |
| `connectTimeout` | `number \| undefined` | Optional | - |
| `identifyingAttribute` | `string \| undefined` | Optional | - |
| `lambdaConfiguration` | [`ConnectorLambdaConfiguration \| undefined`](../../doc/models/connector-lambda-configuration.md) | Optional | - |
| `loginIdAttribute` | `string \| undefined` | Optional | - |
| `readTimeout` | `number \| undefined` | Optional | - |
| `requestedAttributes` | `string[] \| undefined` | Optional | - |
| `securityMethod` | [`LDAPSecurityMethodEnum \| undefined`](../../doc/models/ldap-security-method-enum.md) | Optional | - |
| `systemAccountDN` | `string \| undefined` | Optional | - |
| `systemAccountPassword` | `string \| undefined` | Optional | - |
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
  "authenticationURL": "authenticationURL2",
  "baseStructure": "baseStructure4",
  "connectTimeout": 32,
  "identifyingAttribute": "identifyingAttribute4",
  "lambdaConfiguration": {
    "reconcileId": "000014c6-0000-0000-0000-000000000000"
  }
}
```

