import express from "express";
import cors from "cors";

import {productsRouter} from "./routes/products.router.js"
import {usersRouter} from "./routes/users.router.js"
import { authRouter } from "./routes/auth.router.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({origin: "http://localhost:5173"}))

//routes
app.use("/api/Item", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter)

export {app};