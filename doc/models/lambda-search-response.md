
# Lambda Search Response

Lambda search response

## Structure

`LambdaSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambdas` | [`Lambda[] \| undefined`](../../doc/models/lambda.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "lambdas": [
    {
      "body": "body4",
      "debug": false,
      "engineType": "GraalJS",
      "id": "000001ac-0000-0000-0000-000000000000",
      "insertInstant": 70
    },
    {
      "body": "body4",
      "debug": false,
      "engineType": "GraalJS",
      "id": "000001ac-0000-0000-0000-000000000000",
      "insertInstant": 70
    }
  ],
  "total": 158
}
```

