const { ObjectId } = require('mongodb');
const db = require('../db');

displayContacts = async (request, response) => {
    try {
        let id = "";
        let log = false;

        if (request.query.id) id = request.query.id;
        if (request.params.id) id = request.params.id;  // params will take precedence over query if both are present
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


module.exports = {
    displayContacts,
}