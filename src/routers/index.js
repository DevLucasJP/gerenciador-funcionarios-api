const {Router} = require("express");
const createUserController = require("../controllers/createUserController")

const router = Router();

router.post("/", createUserController);

module.exports = router;