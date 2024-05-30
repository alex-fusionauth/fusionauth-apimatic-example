
# Displayable Raw Login

A displayable raw login that includes application name and user loginId.

## Structure

`DisplayableRawLogin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationName` | `string \| undefined` | Optional | - |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location information. Useful for IP addresses and other displayable data objects. |
| `loginId` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "applicationName": "applicationName2",
  "location": {
    "city": "city6",
    "country": "country8",
    "latitude": 194.62,
    "longitude": 59.18,
    "region": "region0"
  },
  "loginId": "loginId0"
}
```

