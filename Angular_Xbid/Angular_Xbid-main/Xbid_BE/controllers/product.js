import { Product, Category } from "../model/product.js";

export const GetAllProduct = async (req, res) => {
  const product = await Product.find().populate({
    path: "category",
    select: "name",
  });
  res.send(product);
};
export const AddProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = new Product(body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};
export const GetProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id).populate({
    path: "category",
    select: "name",
  });
  res.send(product);
};
export const UpdateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await Product.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.send(product);
};
export const DeleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.send(product);
};

export const AddCate = async (req, res) => {
  const cateNew = req.body;
  try {
    if (cateNew != {}) {
      const cate = new Category(cateNew);
      const result = await cate.save();
      res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
};
export const GetAllCate = async (req, res) => {
  const cate = await Category.find();
  res.send(cate);
};
export const GetCateById = async (req, res) => {
  const id = req.params.id;
  const cate = await Category.findById(id);
  res.send(cate);
};
export const UpdateCate = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const cate = await Category.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.send(cate);
};
export const DeleteCate = async (req, res) => {
  const id = req.params.id;
  const cate = await Category.findByIdAndDelete(id);
  res.send(cate);
};
