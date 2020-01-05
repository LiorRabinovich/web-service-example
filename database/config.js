require('dotenv').config();

const {
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_DATABASE_NAME: database,
  DB_HOST: host,
  DB_DIALECT: dialect,
} = process.env;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect,
  },
  test: {
    username,
    password,
    database: `${database}_tests`,
    host,
    dialect,
  },
  production: {
    username,
    password,
    database,
    host,
    dialect,
  },
};
