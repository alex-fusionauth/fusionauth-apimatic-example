/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** This class is a simple attachment with a byte array, name and MIME type. */
export interface Attachment {
  attachment?: NodeJS.ReadableStream | Blob;
  mime?: string;
  name?: string;
}

export const attachmentSchema: Schema<Attachment> = object({
  attachment: ['attachment', optional(unknown())],
  mime: ['mime', optional(string())],
  name: ['name', optional(string())],
});
