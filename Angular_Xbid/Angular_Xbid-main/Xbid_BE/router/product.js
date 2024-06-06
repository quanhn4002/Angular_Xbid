import express from "express";
import {
  AddCate,
  AddProduct,
  DeleteProduct,
  GetAllCate,
  GetAllProduct,
  GetProductById,
  UpdateProduct,
} from "../controllers/product.js";
const router = express.Router();
router.get("/products", GetAllProduct);

router.get("/products/:id", GetProductById);
router.put("/products/:id", UpdateProduct);
router.delete("/products/:id", DeleteProduct);
router.post("/addProduct", AddProduct);
router.post("/addCate", AddCate);
router.get("/categorys", GetAllCate);

export default router;