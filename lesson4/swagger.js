const { getContacts } = require('./controllers/contacts');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'CSE 341 Week 1-4 project',
        contact: {
            name: "Eugene C. Olsen",
            url: "https://www.linkedin.com/in/eugeneolsen",
            email: "eugeneolsen@byui.edu"
        }
    },
    host: 'localhost:3000',
    basePath: '/contacts',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/contacts.js'];

// Generate output file
swaggerAutogen(outputFile, endpointFiles, doc);
