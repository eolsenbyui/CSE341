getProfessional = (request, response) => {
    // Fill in the code to send back the JSON object.
    const pro = {
        "professionalName": "Elon Musk",
        "base64Image": "",
        "nameLink": {
            "firstName": "Elon",
            "url": "https://www.spacex.com",
        },
        "primaryDescription": "billionaire",
        "workDescription1": "Chairman, SpaceX",
        "workDescription2": "Chairman, Tesla",
        "linkTitleText": "Link Title",
        "linkedInLink": {
            "text": "Elon Musk",
            "link": "https://www.linkedin.com/in/ElonMusk",
        },
        "githubLink" {
            "text": "Elon's repository",
            "link": "https://www.github.com/elonmusk",
        }
    };

    // TODO: Read in the Base64 for the image and assign it to pro.base64Image

    const proString = JSON.stringify(pro);

    response.writeHead(200, {
        "Content-Type": "application/json",
    });

    response.end(proString);
}

module.exports= { getProfessional }