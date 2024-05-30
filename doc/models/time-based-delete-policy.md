
# Time Based Delete Policy

A policy for deleting Users based upon some external criteria.

## Structure

`TimeBasedDeletePolicy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabledInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `numberOfDaysToRetain` | `number \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "enabledInstant": 1659380719000,
  "numberOfDaysToRetain": 252,
  "enabled": false
}
```

