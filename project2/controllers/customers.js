const db = require('../models');
const Customer = db.customers;

/////////
// POST
postCustomer = async (request, response) => {
    let customer = {};

    try {
        const document = {
            "firstName": request.body.firstName,
            "lastName": request.body.lastName,
            "dateOfBirth": request.body.dateOfBirth,
            "email": request.body.email,
            "shippingAddress": request.body.shippingAddress,
            "billingAddress": request.body.billingAddress
        }

        customer = await Customer.create(document);

        response.status(201).send(customer);
    }
    catch (e) {
        response.status(500).send(e.message);
    }
}

////////
// GET
//
// getCustomers returns all customers.
getCustomers = async (request, response) => {
    try {
        const customers = await Customer.find({});

        response.send(customers);
    } catch (e) {
        response.status(500).send(e.message);
    }
}

// getCustomer returns one customer specified by the ID parameter
getCustomer = async (request, response) => {
    try {
        const id = request.params.id;;

        const customer = await Customer.findById(id).exec();

        response.send(customer);
    } catch (e) {
        response.status(500).send(e.message);
    }
}

/////////////
// PATCH
patchCustomer = async (request, response) => {
    response.status(501).send("Not implemented");
}

////////
// PUT
putCustomer = async (request, response) => {
    //response.status(501).send("Not yet implemented");
    try {
        const document = {
            "firstName": request.body.firstName,
            "lastName": request.body.lastName,
            "dateOfBirth": request.body.dateOfBirth,
            "email": request.body.email,
            "shippingAddress": request.body.shippingAddress,
            "billingAddress": request.body.billingAddress
        }

        const customer = await Customer.findByIdAndUpdate(request.params.id, {$set: document});

        response.status(204).send();
    }
    catch (e) {
        response.status(500).send(e.message);
    }
}

///////////
// DELETE 
deleteCustomer = async (request, response) => {
    //response.status(501).send("Not yet implemented");
    try {
        const customer = await Customer.findByIdAndRemove(request.params.id);

        response.send();
    } catch(e) {
        response.status(500).send(e.message);
    }
}



module.exports = {
    postCustomer,
    getCustomers,
    getCustomer,
    putCustomer,
    deleteCustomer
}
