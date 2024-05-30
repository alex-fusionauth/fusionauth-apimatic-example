
# Lambda Request

Lambda API request object.

## Structure

`LambdaRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lambda` | [`Lambda \| undefined`](../../doc/models/lambda.md) | Optional | A JavaScript lambda function that is executed during certain events inside FusionAuth. |

## Example (as JSON)

```json
{
  "lambda": {
    "body": "body2",
    "debug": false,
    "engineType": "GraalJS",
    "id": "00001348-0000-0000-0000-000000000000",
    "insertInstant": 242
  }
}
```

