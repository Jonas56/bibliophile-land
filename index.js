const app = require("./app"); // the actual Express application
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");
const { connectToDatabase } = require("./utils/db");
const server = http.createServer(app);

server.listen(config.PORT, () => {
  connectToDatabase();
  logger.info(`Server running on port ${config.PORT}`);
});
