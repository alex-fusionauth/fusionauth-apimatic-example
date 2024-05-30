
# Messenger Request

## Structure

`MessengerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messenger` | [`BaseMessengerConfiguration \| undefined`](../../doc/models/base-messenger-configuration.md) | Optional | Do not require a setter for 'type', it is defined by the concrete class and is not mutable |

## Example (as JSON)

```json
{
  "messenger": {
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
    "debug": false,
    "id": "000021ac-0000-0000-0000-000000000000",
    "insertInstant": 102,
    "lastUpdateInstant": 160
  }
}
```

