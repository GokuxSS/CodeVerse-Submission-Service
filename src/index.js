// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const app = require('./app');

fastify.register(app);


// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})