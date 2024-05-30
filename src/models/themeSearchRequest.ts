/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  ThemeSearchCriteria,
  themeSearchCriteriaSchema,
} from './themeSearchCriteria';

/** Search request for Themes. */
export interface ThemeSearchRequest {
  /** Search criteria for themes */
  search?: ThemeSearchCriteria;
}

export const themeSearchRequestSchema: Schema<ThemeSearchRequest> = object({
  search: ['search', optional(lazy(() => themeSearchCriteriaSchema))],
});
