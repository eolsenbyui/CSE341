const { MongoClient, ObjectId } = require('mongodb');

displayContacts = async (request, response) => {
    const connectString = process.env.DB_CONNECT;
    const client = new MongoClient(connectString, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        let id = "";

        if (request.query.id) id = request.query.id;
        if (request.params.id) id = request.params.id;  // params will take precedence over query if both are present

        if (id) {
            const contact = await client.db("Assignments").collection("contacts").findOne({ "_id": new ObjectId(id) });

            if (contact) {
                response.send(contact);
            } else {
                response.status(404).send("404 Record not found");
            }
        } else {
            const contacts = await client.db("Assignments").collection("contacts").find().toArray();

            response.send(contacts);
        }
    } catch (e) {
        response.status(500).send(`Invalid ID: ${e.message}`);
    } finally {
        await client.close();
    }
}


module.exports = {
    displayContacts,
}