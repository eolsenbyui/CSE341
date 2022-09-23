const routes = require('express').Router();
const controller = require('../controllers/contacts');

routes.get('/:id?', controller.displayContacts);

module.exports = routes;
