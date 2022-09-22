const routes = require('express').Router();
const controller = require('../controllers/professional');

routes.get('/', controller.getProfessional);

module.exports = routes;
