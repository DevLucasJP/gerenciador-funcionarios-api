import {Router} from "express";
import createUserController from "../controllers/createUserController.js"
import findAllUsersController from "../controllers/findAllUsersController.js"
import updateUserController from "../controllers/updateUserController.js"
import removeAllUsersController from "../controllers/removeAllUsersController.js"
import removeOneUserController from "../controllers/removeOneUserController.js"


const router = Router();

router.post("/", createUserController);
router.get("/users", findAllUsersController);
router.patch("/user/:id", updateUserController);
router.delete("/remove", removeAllUsersController);
router.delete("/remove/:id", removeOneUserController);

export default router