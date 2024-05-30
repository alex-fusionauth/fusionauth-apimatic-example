
# Twilio Messenger Configuration

## Structure

`TwilioMessengerConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountSID` | `string \| undefined` | Optional | - |
| `authToken` | `string \| undefined` | Optional | - |
| `fromPhoneNumber` | `string \| undefined` | Optional | - |
| `messagingServiceSid` | `string \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `data` | `Record<string, unknown> \| undefined` | Optional | - |
| `debug` | `boolean \| undefined` | Optional | - |
| `id` | `string \| undefined` | Optional | - |
| `insertInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `lastUpdateInstant` | `bigint \| undefined` | Optional | The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. |
| `name` | `string \| undefined` | Optional | - |
| `transport` | `string \| undefined` | Optional | - |
| `type` | [`MessengerTypeEnum \| undefined`](../../doc/models/messenger-type-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "insertInstant": 1659380719000,
  "lastUpdateInstant": 1659380719000,
  "accountSID": "accountSID8",
  "authToken": "authToken2",
  "fromPhoneNumber": "fromPhoneNumber6",
  "messagingServiceSid": "messagingServiceSid4",
  "url": "url6"
}
```

