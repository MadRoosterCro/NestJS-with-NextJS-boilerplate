## Description

This is just a starting boilerplate for rapid backend and frontend development.

For backend I am using NestJs, which is a NodeJs framework with TypeScript. You can find the documentation on this link
https://docs.nestjs.com

For frontend I am using NextJS, the React Framework for fast production and prototyping. You can find the documentation on this link
https://nextjs.org

I have created a combination of these two frameworks in a single model-view-controller repo for ultralight infrastructure with only one deployment and no synchronization needed. The same node server that serves the API will serve the frontend too.

If needed it can be separated in their own repositories at a later point.

Currently it's hosting NestJS which is then serving NextJS.

# Setup

## Installation

Create local .env file by copying .env.example file:

```bash
$ cp .env.example .env
$ yarn install
```

> NOTE: _I will add authentication middleware later, this is just a starting point_

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Swagger documentation

After running the app and checking the `.env` file for the path, you can find the API documentation by opening `localhost`.

> Note: _http://localhost:3000/api/documentation_ is default for accesing documentation.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
