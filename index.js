import express from "express";
import cors from "cors";

import { connectDB } from "./database.js";

import productRouter from "./routers/Product.js";
import categoryRouter from "./routers/Category.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use("/", productRouter);
app.use("/", categoryRouter);

app.listen(port, () => {
  console.log(`listening to on ${port}`);
  connectDB();
});
