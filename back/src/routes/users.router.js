import { Router } from "express";
import { userControllers } from "../controllers/users.controller.js";
import {AuthMiddleware} from "../middlewares/auth.middleware.js"

const usersRouter = Router();

usersRouter.get("/", AuthMiddleware(3), userControllers.getUsers )

usersRouter.put("/:id", AuthMiddleware(3), userControllers.updateUser )

usersRouter.delete("/:id",AuthMiddleware(3),  userControllers.deleteUser)

export {usersRouter};