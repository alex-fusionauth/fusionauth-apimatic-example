
# Login Record Search Response

A raw login record response

## Structure

`LoginRecordSearchResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `logins` | [`DisplayableRawLogin[] \| undefined`](../../doc/models/displayable-raw-login.md) | Optional | - |
| `total` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "logins": [
    {
      "applicationName": "applicationName4",
      "location": {
        "city": "city6",
        "country": "country8",
        "latitude": 194.62,
        "longitude": 59.18,
        "region": "region0"
      },
      "loginId": "loginId8"
    }
  ],
  "total": 234
}
```

