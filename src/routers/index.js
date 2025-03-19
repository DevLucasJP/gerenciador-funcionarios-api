import {Router} from "express";
import createUserController from "../controllers/createUserController.js"
import findAllUsersController from "../controllers/findAllUsersController.js"
import updateUserController from "../controllers/updateUserController.js"
import removeUsersController from "../controllers/removeUsersController.js"
import removeUserController from "../controllers/removeUserController.js"


const router = Router();

router.post("/", createUserController);
router.get("/users", findAllUsersController);
router.patch("/user/:id", updateUserController);
router.delete("/remove", removeUsersController);
router.delete("/remove/:id", removeUserController);

export default router