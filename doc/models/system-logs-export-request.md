
# System Logs Export Request

## Structure

`SystemLogsExportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeArchived` | `boolean \| undefined` | Optional | - |
| `lastNBytes` | `number \| undefined` | Optional | - |
| `dateTimeSecondsFormat` | `string \| undefined` | Optional | - |
| `zoneId` | `string \| undefined` | Optional | Timezone Identifier<br>**Constraints**: *Pattern*: `^w+/w+$` |

## Example (as JSON)

```json
{
  "includeArchived": false,
  "lastNBytes": 150,
  "dateTimeSecondsFormat": "dateTimeSecondsFormat8",
  "zoneId": "zoneId8"
}
```

