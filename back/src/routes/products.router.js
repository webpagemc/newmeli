import { Router } from "express";
import { productController } from "../controllers/products.controller.js";
import {AuthMiddleware} from "../middlewares/auth.middleware.js"

const productsRouter = Router();

productsRouter.get("/", AuthMiddleware(1), productController.getProducts )

productsRouter.post("/", AuthMiddleware(2),  productController.createProduct )

productsRouter.put("/:id", AuthMiddleware(2),  productController.updateProduct )

productsRouter.delete("/:id", AuthMiddleware(2),  productController.deleteProduct)

export {productsRouter};