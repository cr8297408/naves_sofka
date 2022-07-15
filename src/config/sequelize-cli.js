const config = require('./env')

module.exports = {
  development: {
    username: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
}