
# Provided Scope Policy

The handling policy for scopes provided by FusionAuth

## Structure

`ProvidedScopePolicy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `email` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `phone` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |
| `profile` | [`Requirable \| undefined`](../../doc/models/requirable.md) | Optional | Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well. |

## Example (as JSON)

```json
{
  "address": {
    "required": false,
    "enabled": false
  },
  "email": {
    "required": false,
    "enabled": false
  },
  "phone": {
    "required": false,
    "enabled": false
  },
  "profile": {
    "required": false,
    "enabled": false
  }
}
```

