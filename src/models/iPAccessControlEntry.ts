/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import {
  IPAccessControlEntryActionEnum,
  iPAccessControlEntryActionEnumSchema,
} from './iPAccessControlEntryActionEnum';

export interface IPAccessControlEntry {
  action?: IPAccessControlEntryActionEnum;
  endIPAddress?: string;
  startIPAddress?: string;
}

export const iPAccessControlEntrySchema: Schema<IPAccessControlEntry> = object({
  action: ['action', optional(iPAccessControlEntryActionEnumSchema)],
  endIPAddress: ['endIPAddress', optional(string())],
  startIPAddress: ['startIPAddress', optional(string())],
});
