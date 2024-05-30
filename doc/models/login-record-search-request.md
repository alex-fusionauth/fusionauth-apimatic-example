
# Login Record Search Request

## Structure

`LoginRecordSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `retrieveTotal` | `boolean \| undefined` | Optional | - |
| `search` | [`LoginRecordSearchCriteria \| undefined`](../../doc/models/login-record-search-criteria.md) | Optional | - |

## Example (as JSON)

```json
{
  "retrieveTotal": false,
  "search": {
    "applicationId": "00000b38-0000-0000-0000-000000000000",
    "end": 242,
    "start": 200,
    "userId": "000025a0-0000-0000-0000-000000000000",
    "numberOfResults": 180
  }
}
```

