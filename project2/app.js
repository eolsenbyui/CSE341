require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const swaggerUI = require('swagger-ui-express');
swaggerDocument = require('./swagger.json')

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/authorization', require('./routes/auth'));
app.use('/orders', require('./routes/orders'));
app.use('/customers', require('./routes/customers'));

const db = require('./models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.listen(port, () => {
    console.log(`Project 2 Orders app running on port ${port}, database connected.`);
});

/*
db.connect((error, database) => {
    if (error) {
        console.log(error);
    } else {
        app.listen(port, () => {
            console.log(`Project 2 Orders app running on port ${port}, database connected.`);
        });
    }
});
*/
