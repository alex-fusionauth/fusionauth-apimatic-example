/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, lazy, object, optional, Schema } from '../schema';
import { Theme, themeSchema } from './theme';

/** Search response for Themes */
export interface ThemeSearchResponse {
  themes?: Theme[];
  total?: bigint;
}

export const themeSearchResponseSchema: Schema<ThemeSearchResponse> = object({
  themes: ['themes', optional(array(lazy(() => themeSchema)))],
  total: ['total', optional(bigint())],
});
