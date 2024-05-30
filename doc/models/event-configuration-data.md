
# Event Configuration Data

## Structure

`EventConfigurationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionType` | [`TransactionTypeEnum \| undefined`](../../doc/models/transaction-type-enum.md) | Optional | The transaction types for Webhooks and other event systems within FusionAuth. |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "transactionType": "Any",
  "enabled": false
}
```

