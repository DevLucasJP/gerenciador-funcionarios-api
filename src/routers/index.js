const {Router} = require("express");
const createUserController = require("../controllers/createUserController")
const findAllUsersController = require("../controllers/findAllUsersController")

const router = Router();

router.post("/", createUserController);
router.get("/users", findAllUsersController);

module.exports = router;