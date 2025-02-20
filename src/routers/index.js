const {Router} = require("express");
const createUserController = require("../controllers/createUser")

const router = Router();

router.post("/", createUserController);

module.exports = router;