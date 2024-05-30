
# SAM Lv 2 Assertion Encryption Configuration

## Structure

`SAMLv2AssertionEncryptionConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `digestAlgorithm` | `string \| undefined` | Optional | - |
| `encryptionAlgorithm` | `string \| undefined` | Optional | - |
| `keyLocation` | `string \| undefined` | Optional | - |
| `keyTransportAlgorithm` | `string \| undefined` | Optional | - |
| `keyTransportEncryptionKeyId` | `string \| undefined` | Optional | - |
| `maskGenerationFunction` | `string \| undefined` | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "digestAlgorithm": "digestAlgorithm2",
  "encryptionAlgorithm": "encryptionAlgorithm6",
  "keyLocation": "keyLocation4",
  "keyTransportAlgorithm": "keyTransportAlgorithm2",
  "keyTransportEncryptionKeyId": "00000480-0000-0000-0000-000000000000"
}
```

