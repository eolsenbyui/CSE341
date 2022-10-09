const routes = require('express').Router();
const controller = require('../controllers/contacts');

routes.post('/', controller.postContact);
routes.get('/', controller.getContacts);
routes.get('/:id', controller.getContact);
routes.put('/:id', controller.putContact);
routes.delete('/:id', controller.deleteContact);

module.exports = routes;
