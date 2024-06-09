const fastifyPlugin = require("fastify-plugin");
const PingService = require('./pingService');

async function servicePlugin(fastify,options){
    fastify.decorate('pingService',new PingService() );
}

module.exports = fastifyPlugin(servicePlugin);