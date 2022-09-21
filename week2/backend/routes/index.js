const routes = require('express').Router();
const controller = require('../controllers/');

routes.get('/professional', controller.getProfessional);

module.exports = routes;
