const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: {
    type: String,
  },
  images: [],
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
    enum: ["electronics", "vehicle", "geeks"],
  },
  onSale: Boolean,
});
const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
