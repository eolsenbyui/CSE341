require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./swagger.json')

const port = process.env.PORT || 3000;

const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/orders', require('./routes/orders'));

db.connect((error, database) => {
    if (error) {
        console.log(error);
    } else {
        app.listen(port, () => {
            console.log(`Project 2 Orders app running on port ${port}, database connected.`);
        });
    }
});
