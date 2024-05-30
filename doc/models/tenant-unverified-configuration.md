
# Tenant Unverified Configuration

## Structure

`TenantUnverifiedConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | [`UnverifiedBehaviorEnum \| undefined`](../../doc/models/unverified-behavior-enum.md) | Optional | - |
| `whenGated` | [`RegistrationUnverifiedOptions \| undefined`](../../doc/models/registration-unverified-options.md) | Optional | - |

## Example (as JSON)

```json
{
  "email": "Allow",
  "whenGated": {
    "behavior": "Allow"
  }
}
```

