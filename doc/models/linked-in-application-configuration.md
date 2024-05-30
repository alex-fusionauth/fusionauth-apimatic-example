
# Linked in Application Configuration

## Structure

`LinkedInApplicationConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `buttonText` | `string \| undefined` | Optional | - |
| `clientId` | `string \| undefined` | Optional | - |
| `clientSecret` | `string \| undefined` | Optional | - |
| `scope` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `createRegistration` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "buttonText": "buttonText0",
  "client_id": "client_id0",
  "client_secret": "client_secret6",
  "scope": "scope6",
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
  }
}
```

