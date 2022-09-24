const { ObjectId } = require('mongodb');
const db = require('../db');

displayContacts = async (request, response) => {
    try {
        let id = "";

        if (request.query.id) id = request.query.id;
        if (request.params.id) id = request.params.id;  // params will take precedence over query if both are present

        if (id) {
            const contact = await db.getDb().collection("contacts").findOne({ "_id": new ObjectId(id) });

            if (contact) {
                response.send(contact);
            } else {
                response.status(404).send("404 Record not found");
            }
        } else {
            const contacts = await db.getDb().collection("contacts").find().toArray();

            response.send(contacts);
        }
    } catch (e) {
        response.status(500).send(`Invalid ID: ${e.message}`);
    }
}


module.exports = {
    displayContacts,
}