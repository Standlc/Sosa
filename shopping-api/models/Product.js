const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    sizes: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: {
      type: Array,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
