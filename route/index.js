const load_platform = require("../controller/platform/load_platform");
const load_conversation = require("../controller/conversation/load_conversation");
const update_platform = require("../controller/platform/update_platform");
const load_message = require("../controller/message/load_message");
const platform = require("./platform")

const fastify = require("fastify")({ logger: true });

module.exports = async function routes(fastify, options) {

    fastify.register(platform)

    fastify.get('/platform', load_platform);

    fastify.put('/update-platform', {
        schema: {
            body: {
                type: "object",
                required: ["platform_id", "is_disabled"],
                properties: {
                    platform_id: { type: "integer", minimum: 1 },
                    is_disabled: { type: "boolean" }
                }
            }
        }
    }, update_platform)



    fastify.get('/message/:platformId/:conversationId', load_message);
};

