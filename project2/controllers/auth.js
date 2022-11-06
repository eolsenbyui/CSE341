const axios = require("axios");

const AuthController = {
  login: (request, response) => {
    const authorizationURL = `${
        process.env.AUTHORIZATION_HOST
    }/authorize?response_type=code&client_id=${
        process.env.CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
        process.env.REDIRECT_URL
    )}&scope=openid%20profile%20email`;

    response.redirect(authorizationURL);
  },

  callback: async (request, res, next) => {
    try {
        const authHost = process.env.AUTHORIZATION_HOST + "oath/token";
        const response = await fetch(
        authHost,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URL,
            scope: "openid profile email",
            code: request.query.code,
          }),
        }
      );

      const json = await response.json();

      res.json(json);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = AuthController;