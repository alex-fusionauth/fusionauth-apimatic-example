
# Lambda

A JavaScript lambda function that is executed during certain events inside FusionAuth.

## Structure

`Lambda`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `engineType` | [`LambdaEngineTypeEnum \| undefined`](../../doc/models/lambda-engine-type-enum.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `type` | [`LambdaTypeEnum \| undefined`](../../doc/models/lambda-type-enum.md) | Optional | The types of lambdas that indicate how they are invoked by FusionAuth. |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "body": "body6",
  "debug": false,
  "engineType": "GraalJS",
  "id": "00000618-0000-0000-0000-000000000000"
}
```

