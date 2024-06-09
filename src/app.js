const fastifyPlugin = require('fastify-plugin');

async function app(fastify,options){
    fastify.register(require('./routes/apiRoutes'));
    fastify.register(require('./services/servicePlugin'));
}

module.exports = fastifyPlugin(app);
