
# Getting Started with FusionAuth API

## Introduction

This is a FusionAuth server. Find out more at [https://fusionauth.io](https://fusionauth.io). You need to [set up an API key](https://fusionauth.io/docs/v1/tech/apis/authentication#managing-api-keys) in the FusionAuth instance you are using to test out the API calls.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=FusionAuthAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=FusionAuthAPI&workspaceName=fusionauth-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *FusionAuth APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add FusionauthApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=FusionAuthAPI&workspaceName=fusionauth-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install FusionauthApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `apiKeyAuthCredentials` | [`ApiKeyAuthCredentials`](doc/auth/custom-header-signature.md) | The credential object for apiKeyAuth |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](doc/auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  apiKeyAuthCredentials: {
    'Authorization': 'Authorization'
  },
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| environment2 | - |

## Authorization

This API uses the following authentication schemes.

* [`ApiKeyAuth (Custom Header Signature)`](doc/auth/custom-header-signature.md)
* [`BearerAuth (OAuth 2 Bearer token)`](doc/auth/oauth-2-bearer-token.md)

## List of APIs

* [Well-Known](doc/controllers/well-known.md)
* [Api-Key](doc/controllers/api-key.md)
* [Application](doc/controllers/application.md)
* [Connector](doc/controllers/connector.md)
* [Consent](doc/controllers/consent.md)
* [Email](doc/controllers/email.md)
* [Entity](doc/controllers/entity.md)
* [Form](doc/controllers/form.md)
* [Group](doc/controllers/group.md)
* [Identity-Provider](doc/controllers/identity-provider.md)
* [Integration](doc/controllers/integration.md)
* [Ip-Acl](doc/controllers/ip-acl.md)
* [Jwt](doc/controllers/jwt.md)
* [Key](doc/controllers/key.md)
* [Lambda](doc/controllers/lambda.md)
* [Login](doc/controllers/login.md)
* [Logout](doc/controllers/logout.md)
* [Message](doc/controllers/message.md)
* [Messenger](doc/controllers/messenger.md)
* [Oauth 2](doc/controllers/oauth-2.md)
* [Passwordless](doc/controllers/passwordless.md)
* [Reactor](doc/controllers/reactor.md)
* [Report](doc/controllers/report.md)
* [System](doc/controllers/system.md)
* [System-Configuration](doc/controllers/system-configuration.md)
* [Tenant](doc/controllers/tenant.md)
* [Theme](doc/controllers/theme.md)
* [Two-Factor](doc/controllers/two-factor.md)
* [User](doc/controllers/user.md)
* [User-Action](doc/controllers/user-action.md)
* [User-Action-Reason](doc/controllers/user-action-reason.md)
* [Webauthn](doc/controllers/webauthn.md)
* [Webhook](doc/controllers/webhook.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

