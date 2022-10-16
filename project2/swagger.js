const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Orders API',
        description: 'CSE 341 PRoject 2',
        contact: {
            name: "Eugene C. Olsen",
            url: "https://www.linkedin.com/in/eugeneolsen",
            email: "eugeneolsen@byui.edu"
        }
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/orders.js'];

// Generate output file
swaggerAutogen(outputFile, endpointFiles, doc);
