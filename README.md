# Web Service Example API

## Swagger UI
![Swagger UI](https://raw.githubusercontent.com/LiorRabinovich/web-service-example/master/screenshots/swagger-ui.png)

## Scripts

### `npm install`
- Install all dependencies

### `npm start`
- Start the server

### `npm run test`
- Run all tests

### `npm run db:create`
- Create the database

### `npm run db:migrate`
- Run migrations

### `npm run db:drop`
- Drop the database

### `npm run lint`
- ESLint

### `npm run lint:fix`
- ESLint Fix

### `npm run release`
- Update packgae.json version
- Create git tag
- Generate CHANGELOG.md

#### Conventional Commits
- **fix:**: a commit of the type **fix** patches a bug in your codebase (this correlates with **PATCH** in semantic versioning).
- **feat:** a commit of the type **feat** introduces a new feature to the codebase (this correlates with **MINOR** in semantic versioning).
- **BREAKING CHANGE:** a commit that has the text **BREAKING CHANGE:** at the beginning of its optional body or footer section introduces a breaking API change (correlating with **MAJOR** in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
- [more information](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
