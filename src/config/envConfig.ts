const config = {
  environment: process.env.NODE_ENV,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbDialect: process.env.DB_DIALECT,
  serverPort: process.env.SERVER_PORT,
};
console.log(config);
export default config;
