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

    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

// Generate output file
swaggerAutogen(outputFile, endpointsFiles, doc);
