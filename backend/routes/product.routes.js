const express = require("express");

const productRouter = express.Router();
const { ProductModel } = require("../models/Product.model");

productRouter.get("/", async (req, res) => {
  let query = req.query
  
  const products = await ProductModel.find({});
  res.send(products);
});
// productRouter.post("/add", async (req, res) => {
//   let data = req.body;
//   await ProductModel.insertMany(data);
//   res.send("added");
// });
module.exports = { productRouter };
