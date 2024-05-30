/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  dict,
  lazy,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { FormControlEnum, formControlEnumSchema } from './formControlEnum';
import { FormDataTypeEnum, formDataTypeEnumSchema } from './formDataTypeEnum';
import {
  FormFieldValidator,
  formFieldValidatorSchema,
} from './formFieldValidator';

export interface FormField {
  confirm?: boolean;
  consentId?: string;
  control?: FormControlEnum;
  data?: Record<string, unknown>;
  description?: string;
  id?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  insertInstant?: bigint;
  key?: string;
  /** The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC. */
  lastUpdateInstant?: bigint;
  name?: string;
  options?: string[];
  required?: boolean;
  type?: FormDataTypeEnum;
  validator?: FormFieldValidator;
}

export const formFieldSchema: Schema<FormField> = object({
  confirm: ['confirm', optional(boolean())],
  consentId: ['consentId', optional(string())],
  control: ['control', optional(formControlEnumSchema)],
  data: ['data', optional(dict(unknown()))],
  description: ['description', optional(string())],
  id: ['id', optional(string())],
  insertInstant: ['insertInstant', optional(bigint())],
  key: ['key', optional(string())],
  lastUpdateInstant: ['lastUpdateInstant', optional(bigint())],
  name: ['name', optional(string())],
  options: ['options', optional(array(string()))],
  required: ['required', optional(boolean())],
  type: ['type', optional(formDataTypeEnumSchema)],
  validator: ['validator', optional(lazy(() => formFieldValidatorSchema))],
});
