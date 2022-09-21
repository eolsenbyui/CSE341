require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))   // Public files, images, etc.

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Week 2 team app running on port ${port}`)
})