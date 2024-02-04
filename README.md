# nestjs-boilerplate
A boilerplate for a NestJS project.

This boilerplate contains the minimum needed to start a NestJS project. The idea is to provide only and exclusively the basic scaffolding and utilities to develop a service with NestJS.

This boilerplate has the fllowing utilities:
- NestJS
- TypeScript
- ESLint
- Prettier
- Morgan
- Jest
- Postman Docs
- Husky Pre-Commit
- Makefile
- Docker

## Prerequisites
The following dependencies are required:
- Node ^21.0.0
- NPM ^10.2.0

The following dependencies are optional, but are still very convenient:
- Docker ^24.0.6
- Docker Compose ^2.22.0
- GNU Make ^3.81

## Configuration
This service can be configured by a .env file. Run the following command:
```bash
cp env_example .env
```
to copy the env_example content into the .env file, then modify the environment variables. 

The env_example has the following env vars:
- `LISTENING_PORT`: the listening port of the service. For example, `3001`, or `8081`. It's required.
- `DOCKER_CONTAINER_NAME`: the container name, like `nestjs-boilerplate`. It's useful to run the dockerized service.
- `DOCKER_IMAGE_NAME`: the container name, like `nestjs-boilerplate`. It's useful to run the dockerized service.
- `DOCKER_PORT`: the listening port of the dockerized service, like `8081`, or `8088`. It's useful to run the dockerized service.

## Preparation
This service uses an Husky pre-commit. The pre-commit executes a code linting and test coverage before each commit.

Install Husky with the following  command:
```bash
npm run prepare
```

Sometimes you might even need to recreate the pre-commit Husky from scratch... don't worry, this is the right command:
```bash
npx husky add .husky/pre-commit "npm run lint && npm run test:cov"
```

## Installation
```bash
npm install
# or
npm i
```

## Running
```bash
# development
npm run start

# watch mode
npm run start:dev

# debug mode
npm run start:debug

# prod mode
npm run start:prod # after the npm run build command
```

## Unit Tests
```bash
# unit tests
npm run test

# unit tests (watch mode)
npm run test:watch

# test coverage
npm run test:cov
```

## Code Linting
```bash
npm run lint
```

## Code Formatting
```bash
npm run format
```

## Running the dockerized service
Build the docker image with the following command:
```bash
docker build -t nestjs-boilerplate .
# or
make docker-build
```

Then, run the dockerized service:
```bash
docker-compose up -d
# or
make docker-up
```
## Stopping the dockerized service
Stop the dockerized service:
```bash
docker-compose down
# or
make docker-down
```

## Inspect the dockerized service
See container logs:
```bash
docker-compose logs -f nestjs-boilerplate --tail=50
# or
make docker-logs
```

## Cleaning
To clear build and test coverage files, run:
```bash
rm -rf coverage/
rm -rf dist

# or
make clean
```

## Contacts
Don't hesitate to contact me for any info, bugs, or improvements! Below are my contacts:
- [GitHub](https://github.com/chralex00)
- [Email](mailto:christian.alessandro.atzeni.00@outlook.com)