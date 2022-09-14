const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Lesson 1 app running on port ${port}`)
})