const express = require("express");
const cartRouter = express.Router();
const { CartModel } = require("../models/Cart.model");

cartRouter.get("/", async (req, res) => {
  try {
    const cart = await CartModel.find();
    res.send(cart);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

cartRouter.post("/addtocart", async (req, res) => {
  const payload = req.body;
  try {
    const product = new CartModel(payload);
    await product.save();
    res.send({ msg: "Created successfully" });
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

cartRouter.patch("/editcart/:productID", async (req, res) => {
  const productID = req.params.productID;
  const payload = req.body;
  try {
    await CartModel.findByIdAndUpdate({ _id: productID }, payload);
    console.log(query);
    res.send("Updated");
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong, try again later" });
  }
});

cartRouter.delete("/deletecart/:productID", async (req, res) => {
  const productID = req.params.productID;
  try {
    await CartModel.findByIdAndDelete({ _id: productID });
    res.send(`product ${productID} deleted successfully`);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong, try again later" });
  }
});

module.exports = { cartRouter };
