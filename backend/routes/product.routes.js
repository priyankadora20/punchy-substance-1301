const express = require("express");

const productRouter = express.Router();
const { ProductModel } = require("../models/Product.model");

productRouter.get("/", async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

module.exports = { productRouter };
