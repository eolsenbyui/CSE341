const { ObjectId } = require('mongodb');
const db = require('../db');

/////////
// POST
postContact = async (request, response) => {
    let contact = {};

    try {
        contact = await db.getDb().collection("contacts").insertOne(request.body);
    } catch (e) {
        response.status(500).send(e.message);
    }

    response.status(201).send(contact);
}


////////
// GET
//
// Depending on the presence of the id parameter or query,
// getContacts will return one or all contacts.
getContacts = async (request, response) => {
    try {
        let id = "";
        let log = false;

        if (request.query.id) id = request.query.id;
        if (request.params.id) id = request.params.id;  // id param will take precedence over id query if both are present
        if (request.query.log) {
            if (request.query.log == "true") log = true;
        }

        if (log) {
            console.log(`ID: \"${id}\"`);
            console.log(`Database name: ${db.getDb().databaseName}`);
        }

        if (id) {
            const contact = await db.getDb().collection("contacts").findOne({ "_id": new ObjectId(id) });

            if (log) console.log(`Contact:\n${JSON.stringify(contact, null, 3)}`);

            if (contact) {
                response.send(contact);
            } else {
                response.status(404).send("404 Record not found");
            }
        } else {
            const contacts = await db.getDb().collection("contacts").find().toArray();

            if (log) console.log(`Contacts:\n${JSON.stringify(contacts, null, 3)}`);

            response.send(contacts);
        }
    } catch (e) {
        response.status(500).send(`Invalid ID: ${e.message}`);
    }
}


////////
// PUT
putContact = async (request, response) => {
    try {
        const result = await db.getDb().collection("contacts").updateOne(
            { "_id": new ObjectId(request.params.id) },
            { 
                $set: request.body,
                $currentDate: { lastModified: true }
            });

        response.status(204).send();
    } catch (error) {
        response.status(500).send(error.message);
    }
}


///////////
// DELETE 
deleteContact = async (request, response) => {
    try {
        const result = await db.getDb().collection("contacts").deleteOne( { _id: new ObjectId(request.params.id) } );

        if (result.deletedCount === 0) {
            response.status(404).send(`_id ${request.body._id} not found.`);
        }

        response.send();
    } catch (error) {
        response.status(500).send(error.message);
    }
}

module.exports = {
    postContact,
    getContacts,
    putContact,
    deleteContact
}