const routes = require('express').Router();
const controller = require('../controllers/orders');

routes.post('/', controller.postOrder);
routes.get('/', controller.getOrders);
// routes.get('/:id', controller.getOrder);
// routes.patch('/:id', controller.patchOrder);
// routes.put('/:id', controller.putOrder);
// routes.delete('/:id', controller.deleteOrder);

module.exports = routes;
