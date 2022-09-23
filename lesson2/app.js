require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));
app.use('/contacts', require('./routes/contacts'));

app.listen(port, () => {
    console.log(`Lesson 2 app running on port ${port}`);
})