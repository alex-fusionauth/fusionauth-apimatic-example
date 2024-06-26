/**
 * FusionAuth APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  CleanSpeakConfiguration,
  cleanSpeakConfigurationSchema,
} from './cleanSpeakConfiguration';
import {
  KafkaConfiguration,
  kafkaConfigurationSchema,
} from './kafkaConfiguration';

/** Available Integrations */
export interface Integrations {
  /** CleanSpeak configuration at the system and application level. */
  cleanspeak?: CleanSpeakConfiguration;
  kafka?: KafkaConfiguration;
}

export const integrationsSchema: Schema<Integrations> = object({
  cleanspeak: [
    'cleanspeak',
    optional(lazy(() => cleanSpeakConfigurationSchema)),
  ],
  kafka: ['kafka', optional(lazy(() => kafkaConfigurationSchema))],
});
