const { ObjectId } = require('mongodb');
const { orders } = require('../models');
//const db = require('../db');
const db = require('../models');
const Order = db.orders;

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
        const orders = await Order.find({});

        response.send(orders);
    } catch (e) {
        response.status(500).send(e.message);
    }
}

// getOrder returns one order specified by the ID parameter
getOrder = async (request, response) => {
    try {
        const id = request.params.id;;

        const order = await Order.findById(id).exec();

        response.send(order);
    } catch (e) {
        response.status(500).send(e.message);
    }
}

/////////////
// PATCH
//
patchOrder = async (request, response) => {
    response.status(501).send("Not yet implemented");
}

putOrder = async (request, response) => {
    response.status(501).send("Not yet implemented");
}

deleteOrder = async (request, response) => {
    response.status(501).send("Not yet implemented");
}



module.exports = {
    postOrder,
    getOrders,
    getOrder,
    patchOrder,
    putOrder,
    deleteOrder
}