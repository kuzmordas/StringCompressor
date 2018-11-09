let swaggerJSDoc = require('swagger-jsdoc');

let swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Compressor API',
    },
    host: 'localhost:3000',
    basePath: '/',
};

let options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./controllers/controller.js'],
};

module.exports = swaggerJSDoc(options);