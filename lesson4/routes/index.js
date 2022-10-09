const routes = require('express').Router();
const controller = require('../controllers/');

routes.get('/', controller.displayInfo);

module.exports = routes;
