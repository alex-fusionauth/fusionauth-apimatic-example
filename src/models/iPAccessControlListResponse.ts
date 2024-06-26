/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  IPAccessControlList,
  iPAccessControlListSchema,
} from './iPAccessControlList';

export interface IPAccessControlListResponse {
  ipAccessControlList?: IPAccessControlList;
  ipAccessControlLists?: IPAccessControlList[];
}

export const iPAccessControlListResponseSchema: Schema<IPAccessControlListResponse> = object(
  {
    ipAccessControlList: [
      'ipAccessControlList',
      optional(lazy(() => iPAccessControlListSchema)),
    ],
    ipAccessControlLists: [
      'ipAccessControlLists',
      optional(array(lazy(() => iPAccessControlListSchema))),
    ],
  }
);
