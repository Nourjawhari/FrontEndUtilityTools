const load_conversation = require("../controller/conversation/load_conversation");

const fastify = require("fastify")({ logger: true });

module.exports = async function routes(fastify, options) {

    fastify.get('/conversation/:platformId', load_conversation);
}