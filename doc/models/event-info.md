
# Event Info

Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).

## Structure

`EventInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `deviceDescription` | `string \| undefined` | Optional | - |
| `deviceName` | `string \| undefined` | Optional | - |
| `deviceType` | `string \| undefined` | Optional | - |
| `ipAddress` | `string \| undefined` | Optional | - |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | Location information. Useful for IP addresses and other displayable data objects. |
| `os` | `string \| undefined` | Optional | - |
| `userAgent` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "data": {
    "key0": {
      "key1": "val1",
      "key2": "val2"
    },
    "key1": {
      "key1": "val1",
      "key2": "val2"
    },
    "key2": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "deviceDescription": "deviceDescription0",
  "deviceName": "deviceName4",
  "deviceType": "deviceType8",
  "ipAddress": "ipAddress4"
}
```

