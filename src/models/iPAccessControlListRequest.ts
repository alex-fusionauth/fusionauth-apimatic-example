/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  IPAccessControlList,
  iPAccessControlListSchema,
} from './iPAccessControlList';

export interface IPAccessControlListRequest {
  ipAccessControlList?: IPAccessControlList;
}

export const iPAccessControlListRequestSchema: Schema<IPAccessControlListRequest> = object(
  {
    ipAccessControlList: [
      'ipAccessControlList',
      optional(lazy(() => iPAccessControlListSchema)),
    ],
  }
);