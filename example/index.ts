// FusionAuth TypeScript Client Example

import { FusionAuthClient } from '@fusionauth/typescript-client';
const client = new FusionAuthClient(
  'this_really_should_be_a_long_random_alphanumeric_value_but_this_still_works',
  'http:localhost:9011'
);
// client
//   .retrieveUserByEmail('richard@example.com')
//   .then((clientResponse) => {
//     console.log(
//       'Old Example User:',
//       JSON.stringify(clientResponse.response.user, null, 2)
//     );
//   })
//   .catch(console.error);

//   client
//   .retrieveUserByChangePasswordId('example')
//   .then((clientResponse) => {
//     console.log('User:', JSON.stringify(clientResponse.response.user, null, 2));
//   })
//   .catch(console.error);

//APIMatic client example

import { Client } from '../src/client';
import { UserController } from '../src/controllers/userController';
import { Environment } from '../src/configuration';
const client2 = new Client({
  apiKeyAuthCredentials: {
    Authorization:
      'this_really_should_be_a_long_random_alphanumeric_value_but_this_still_works',
  },
  environment: Environment.Production,
});

const userController = new UserController(client2);
userController
  .retrieveUserByChangePasswordIdByEmailByLoginIdByUsernameByVerificationIdUsingJWT(
    'richard@example.com'
  )
  .then((clientResponse) => {
    console.log('User:', JSON.stringify(clientResponse.result.user, null, 2));
  })
  .catch(console.error);
