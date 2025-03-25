import { Router } from "express";
import createUserController from "../controllers/createUserController.js"
import findAllUsersController from "../controllers/findAllUsersController.js"
import findOneUserController from "../controllers/findOneUserController.js";
import updateUserController from "../controllers/updateUserController.js"
import removeAllUsersController from "../controllers/removeAllUsersController.js"
import removeOneUserController from "../controllers/removeOneUserController.js"
import loginController from "../user/auth/userLogin.js";


const router = Router();

router.post("/", createUserController);
router.post("/auth", loginController);
router.get("/users", findAllUsersController);
router.get("/user/:id", findOneUserController);
router.patch("/update/:id", updateUserController);
router.delete("/remove", removeAllUsersController);
router.delete("/remove/:id", removeOneUserController);

export default router