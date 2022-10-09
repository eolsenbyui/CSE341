require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./db');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));

db.connect((error, database) => {
    if (error) {
        console.log(error);
    } else {
        app.listen(port, () => {
            console.log(`Contacts API running on port ${port}, database connected.`);
        });    
    }
});
