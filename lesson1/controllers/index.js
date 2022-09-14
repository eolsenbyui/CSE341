displayName = (request, response) => {
    let name = {
        "name": {
            "last": "Amaya",
            "first": "Lynnea",
            "middleInitial": "K"
        },
        "relationship": "stepdaughter",
        "age": 15,
        "height": "5' 2\"",
        "weight": "< Confidential! >",
    };

    let nameString = JSON.stringify(name, null, 3);

    response.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Length": nameString.length,
    });

    response.end(nameString);
}

module.exports = {
    displayName,
}