
# Webhook Search Request

Search request for webhooks

## Structure

`WebhookSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `search` | [`WebhookSearchCriteria \| undefined`](../../doc/models/webhook-search-criteria.md) | Optional | Search criteria for webhooks. |

## Example (as JSON)

```json
{
  "search": {
    "description": "description2",
    "tenantId": "00001246-0000-0000-0000-000000000000",
    "url": "url6",
    "numberOfResults": 180,
    "orderBy": "orderBy2"
  }
}
```

