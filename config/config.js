require("dotenv").config();

var env = process.env;

module.exports = {
  "port": env.APP_PORT,
  "loginUrl": env.LOGINURL,
  "env": env.ENVIRONMENT,
  "httpPort": env.HTTP_PORT,
  'serverHostname': env.SERVER_HOSTNAME,
  "databaseConnection": env.DB_CONNECTION,
  "isLocal": env.ENVIRONMENT === 'local',
  "isProd": env.ENVIRONMENT === 'production'
};
