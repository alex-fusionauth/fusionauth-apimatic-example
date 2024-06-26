/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import {
  IPAccessControlList,
  iPAccessControlListSchema,
} from './iPAccessControlList';

export interface IPAccessControlListSearchResponse {
  ipAccessControlLists?: IPAccessControlList[];
  total?: bigint;
}

export const iPAccessControlListSearchResponseSchema: Schema<IPAccessControlListSearchResponse> = object(
  {
    ipAccessControlLists: [
      'ipAccessControlLists',
      optional(array(lazy(() => iPAccessControlListSchema))),
    ],
    total: ['total', optional(bigint())],
  }
);
