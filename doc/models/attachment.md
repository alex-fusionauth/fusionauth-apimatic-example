
# Attachment

This class is a simple attachment with a byte array, name and MIME type.

## Structure

`Attachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attachment` | `NodeJS.ReadableStream \| Blob \| undefined` | Optional | - |
| `mime` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "attachment": "attachment8",
  "mime": "mime0",
  "name": "name0"
}
```

