
# Login Record Export Request

## Structure

`LoginRecordExportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `criteria` | [`LoginRecordSearchCriteria \| undefined`](../../doc/models/login-record-search-criteria.md) | Optional | - |
| `dateTimeSecondsFormat` | `string \| undefined` | Optional | - |
| `zoneId` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |

## Example (as JSON)

```json
{
  "criteria": {
    "applicationId": "0000233a-0000-0000-0000-000000000000",
    "end": 212,
    "start": 170,
    "userId": "00001692-0000-0000-0000-000000000000",
    "numberOfResults": 106
  },
  "dateTimeSecondsFormat": "dateTimeSecondsFormat0",
  "zoneId": "zoneId4"
}
```

