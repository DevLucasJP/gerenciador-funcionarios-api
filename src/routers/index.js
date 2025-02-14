const {Router} = require("express");
const createUserController = require("../controllers/createUser")

const router = Router();

router.get("/", createUserController);

module.exports = router;