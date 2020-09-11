const Hapi = require('hapi');


const server = new Hapi.Server({ 
    host: 'localhost', 
    port: 8000 
});


server.route({
    method: 'GET',
    path:'/helloworld', 
    handler: function (request, reply) {
    return reply('hello world');
}
});

server.start((err) => {
   if (err) {
     throw err;
   }
  console.log('Server running at:', server.info.uri);
});


