async function v1Routes(fastify,options){
    fastify.register(require('./test/testRoutes'),{
        prefix: '/v1'
    })
}

module.exports = v1Routes;