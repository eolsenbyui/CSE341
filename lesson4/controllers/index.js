displayInfo = (request, response) => {
    let info = {
        "appName": "Contacts API",
        "documentation": "/api-docs",
        "course": "CSE 341",
        "section": "1",
        "assignment": "Contacts API project",
        "week": "4"
    };

    let infoString = JSON.stringify(info, null, 3);

    response.writeHead(200, {
        "Content-Type": "application/json"
    });

    response.end(infoString);
}

module.exports = {
    displayInfo,
}