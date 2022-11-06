const routes = require('express').Router();
const controller = require('../controllers/customers');

routes.post('/', controller.postCustomer);
routes.get('/', controller.getCustomers);
routes.get('/:id', controller.getCustomer);
routes.put('/:id', controller.putCustomer);
routes.delete('/:id', controller.deleteCustomer);

module.exports = routes;
