const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Orders API',
        description: 'CSE 341 Project 2',
        contact: {
            name: "Eugene C. Olsen",
            url: "https://www.linkedin.com/in/eugeneolsen",
            email: "eugeneolsen@byui.edu"
        }
    },
    host: '',
    basePath: '/',
    schemes: ['https', 'http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{
        "name": "Orders API",
        "description": "CSE 341, Project 2"
    }],
    securityDefinitions: {
        Authorization: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "Authentication token (Bearer)",
          example: "Bearer <your token>",
        },
      },
      security: [
        {
          Authorization: [],
        },
      ],
    };

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

// Generate output file
swaggerAutogen(outputFile, endpointsFiles, doc);
