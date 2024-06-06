import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortdescription: String,
    description: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorys",
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    start_price: {
      type: Number,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Product = mongoose.model("products", ProductSchema);
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Category = mongoose.model("categorys", categorySchema);
