require("dotenv").config();
const fastify = require("fastify")({logger: true});
const { connect_db } = require("./config/connect_db")
const routes = require("./route");
const fastify_cors = require('@fastify/cors');

// initialize port from env varibales
const PORT = process.env.SERVER_PORT;


// For the routes
fastify.register(routes, {prefix: "/api/v1"});

fastify.register(fastify_cors, {
  origin : process.env.FRONTEND_URL,
  credentials: true
})

// Create Fastify server
const app = fastify;
// Start the server
const start = async () => {
  try {
    // connect to database
    await connect_db();

    // start server
    await fastify.listen({ port: PORT, host:  "172.168.1.217" });

    console.log(`Fastify server running on http://172.168.1.217:${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();