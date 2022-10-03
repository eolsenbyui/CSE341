const routes = require('express').Router();
const controller = require('../controllers/contacts');

routes.post('/', controller.postContact);
routes.get('/:id?', controller.getContacts);
routes.put('/:id', controller.putContact);
routes.delete('/', controller.deleteContact);

module.exports = routes;
