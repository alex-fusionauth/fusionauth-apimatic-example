/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, dict, lazy, object, optional, Schema } from '../schema';
import { Totals, totalsSchema } from './totals';

/** The response from the total report. This report stores the total numbers for each application. */
export interface TotalsReportResponse {
  applicationTotals?: Record<string, Totals>;
  globalRegistrations?: bigint;
  totalGlobalRegistrations?: bigint;
}

export const totalsReportResponseSchema: Schema<TotalsReportResponse> = object({
  applicationTotals: [
    'applicationTotals',
    optional(dict(lazy(() => totalsSchema))),
  ],
  globalRegistrations: ['globalRegistrations', optional(bigint())],
  totalGlobalRegistrations: ['totalGlobalRegistrations', optional(bigint())],
});
