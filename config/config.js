require('dotenv').config();

module.exports = {
  development: {
    username: process.env.HEROKU_USER || process.env.MYSQL_USER,
    password: process.env.HEROKU_PASSWORD ||process.env.MYSQL_PASSWORD,
    database: process.env.HEROKU_DB ||process.env.SCHEMA,
    host: process.env.HEROKU_HOSTNAME ||process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SCHEMA,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SCHEMA,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
};
