const {Router} = require("express");
const createUserController = require("../controllers/createUserController")
const findAllUsersController = require("../controllers/findAllUsersController")
const updateUserController = require("../controllers/updateUserController")

const router = Router();

router.post("/", createUserController);
router.get("/users", findAllUsersController);
router.patch("/user/:id", updateUserController);

module.exports = router;