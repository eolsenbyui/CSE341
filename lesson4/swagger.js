const { getContacts } = require('./controllers/contacts');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Week 1-4 project'
    },
    host: 'localhost:3000',
    basePath: '/contacts',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/contacts.js'];

// Generate output file
swaggerAutogen(outputFile, endpointFiles, doc);
