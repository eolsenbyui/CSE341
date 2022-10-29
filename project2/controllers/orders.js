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

        order = await Order.create(document);

        response.status(201).send(order);
    }
    catch (e) {
        response.status(500).send(e.message);
    }
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
patchOrder = async (request, response) => {
    response.status(501).send("Not yet implemented");
}

////////
// PUT
putOrder = async (request, response) => {
    //response.status(501).send("Not yet implemented");
    try {
        const document = {
            "customerID": request.body.customerID,
            "items": request.body.items,
            "status": request.body.status
        }

        const order = await Order.findByIdAndUpdate(request.params.id, {$set: document});

        response.status(204).send();
    }
    catch (e) {
        response.status(500).send(e.message);
    }
}

///////////
// DELETE 
deleteOrder = async (request, response) => {
    //response.status(501).send("Not yet implemented");
    try {
        const order = await Order.findByIdAndRemove(request.params.id);

        response.send();
    } catch(e) {
        response.status(500).send(e.message);
    }
}



module.exports = {
    postOrder,
    getOrders,
    getOrder,
    patchOrder,
    putOrder,
    deleteOrder
}