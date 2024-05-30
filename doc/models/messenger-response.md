
# Messenger Response

## Structure

`MessengerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messenger` | [`BaseMessengerConfiguration \| undefined`](../../doc/models/base-messenger-configuration.md) | Optional | Do not require a setter for 'type', it is defined by the concrete class and is not mutable |
| `messengers` | [`BaseMessengerConfiguration[] \| undefined`](../../doc/models/base-messenger-configuration.md) | Optional | - |

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
  },
  "messengers": [
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
      "debug": false,
      "id": "00000eaa-0000-0000-0000-000000000000",
      "insertInstant": 52,
      "lastUpdateInstant": 110
    }
  ]
}
```

