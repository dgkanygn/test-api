import express from "express";

const productRouter = express.Router();

import {
  createProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} from "../controllers/Product.js";

productRouter.post("/createProduct", createProduct);

productRouter.get("/product", getAllProducts);

productRouter.get("/product/:id", getProductById);

productRouter.patch("/updateProduct/:id", updateProduct);

productRouter.delete("/deleteProduct/:id", deleteProduct);

export default productRouter;
