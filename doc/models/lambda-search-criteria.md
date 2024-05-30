
# Lambda Search Criteria

Search criteria for Lambdas

## Structure

`LambdaSearchCriteria`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `type` | [`LambdaTypeEnum \| undefined`](../../doc/models/lambda-type-enum.md) | Optional | The types of lambdas that indicate how they are invoked by FusionAuth. |
| `numberOfResults` | `number \| undefined` | Optional | - |
| `orderBy` | `string \| undefined` | Optional | - |
| `startRow` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "body": "body8",
  "name": "name2",
  "type": "SelfServiceRegistrationValidation",
  "numberOfResults": 128,
  "orderBy": "orderBy2"
}
```

