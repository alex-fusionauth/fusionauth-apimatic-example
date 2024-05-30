
# Application Registration Delete Policy

A Application-level policy for deleting Users.

## Structure

`ApplicationRegistrationDeletePolicy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unverified` | [`TimeBasedDeletePolicy \| undefined`](../../doc/models/time-based-delete-policy.md) | Optional | A policy for deleting Users based upon some external criteria. |

## Example (as JSON)

```json
{
  "unverified": {
    "enabledInstant": 30,
    "numberOfDaysToRetain": 214,
    "enabled": false
  }
}
```

