require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const swaggerAutogen = require('swagger-autogen');
const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./swagger.json')

const db = require('./db');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

db.connect((error, database) => {
    if (error) {
        console.log(error);
    } else {
        app.listen(port, () => {
            console.log(`Lesson 3 app running on port ${port}, database connected.`);
        });    
    }
});
