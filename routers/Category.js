import express from "express";

const categoryRouter = express.Router();

import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getAllCategory,
  updateCategory,
} from "../controllers/Category.js";

categoryRouter.post("/createCategory", createCategory);

categoryRouter.get("/category", getAllCategory);

categoryRouter.get("/category/:id", getCategoryById);

categoryRouter.patch("/updateCategory/:id", updateCategory);

categoryRouter.delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
