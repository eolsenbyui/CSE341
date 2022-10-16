const { ObjectId } = require('mongodb');
const db = require('../db');

/////////
// POST
postOrder = async (request, response) => {
    let order = {};

    try {
        const document = {
            "customerID": request.body.customerID,
            "items": request.body.items,
            "status": request.body.status
        }

        order = await db.getDb().collection("orders").insertOne(document);
    }
    catch (e) {
        response.status(500).send(e.message);
    }

    response.status(201).send(order);
}

////////
// GET
//
// getOrders returns all orders.
getOrders = async (request, response) => {
    try {
        const orders = await db.getDb().collection("orders").find().toArray();

        response.send(orders);
    } catch (e) {
        response.status(500).send(e.message);
    }
}


module.exports = {
    postOrder,
    getOrders,
}