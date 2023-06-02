const config = {
  PORT: process.env.PORT,
  DEV_SERVER_URL: `http://localhost:${process.env.PORT}`,
  MONGO_DB_CLUSTER_URL: process.env.MONGO_DB_CLUSTER_URL,
};

module.exports = config;
