const { Router } = require("express");
const controller = require("../controllers/auth");

const router = Router();

router.get("/login", controller.login);
router.get("/callback", controller.callback);

module.exports = router;