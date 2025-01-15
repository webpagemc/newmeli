import { Router } from "express";
import { authControllers } from "../controllers/auth.controller.js"

const authRouter = Router();

authRouter.post("/login",authControllers.loginUser )

authRouter.post("/",authControllers.registerUser )

export {authRouter};