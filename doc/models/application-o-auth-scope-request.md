
# Application O Auth Scope Request

The Application Scope API request object.

## Structure

`ApplicationOAuthScopeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scope` | [`ApplicationOAuthScope \| undefined`](../../doc/models/application-o-auth-scope.md) | Optional | A custom OAuth scope for a specific application. |

## Example (as JSON)

```json
{
  "scope": {
    "applicationId": "00001ae2-0000-0000-0000-000000000000",
    "data": {
      "key0": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "defaultConsentDetail": "defaultConsentDetail6",
    "defaultConsentMessage": "defaultConsentMessage4",
    "description": "description2"
  }
}
```

