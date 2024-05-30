
# Form Field

## Structure

`FormField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confirm` | `boolean \| undefined` | Optional | - |
| `consentId` | `string \| undefined` | Optional | - |
| `control` | [`FormControlEnum \| undefined`](../../doc/models/form-control-enum.md) | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `key` | `string \| undefined` | Optional | - |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `options` | `string[] \| undefined` | Optional | - |
| `required` | `boolean \| undefined` | Optional | - |
| `type` | [`FormDataTypeEnum \| undefined`](../../doc/models/form-data-type-enum.md) | Optional | - |
| `validator` | [`FormFieldValidator \| undefined`](../../doc/models/form-field-validator.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "confirm": false,
  "consentId": "0000012a-0000-0000-0000-000000000000",
  "control": "radio",
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "description": "description0"
}
```

