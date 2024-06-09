const pingController = require("../../../controller/pingController");

async function test(fastify,options){
    fastify.get('/ping',pingController);
}

module.exports = test;