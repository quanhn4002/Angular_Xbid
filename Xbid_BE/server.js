import express from "express";
import productRouter from "./router/product.js";
import userRouter from "./router/user.router.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use("", productRouter);
app.use("", userRouter);
const port = 8000;
const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Xbids");
    console.log("Connect db successfully");
  } catch (error) {
    console.log("Can not connect to DB");
  }
};
app.listen(port, async () => {
  await connectdb();
  console.log(`Endpoint: http://localhost:${port}`);
});
