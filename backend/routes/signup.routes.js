const express = require("express");

const signupRouter = express.Router();
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const { signupvalidate } = require("../middlewares/signupvalidate");
signupRouter.use(signupvalidate);
signupRouter.post("/", async (req, res) => {
  const { email, password, name, userType } = req.body;
  const userPresent = await UserModel.findOne({ email });
  if (userPresent) {
    res.send("Try loggin in, already exist");
  }
  try {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({ email, password: hash, name, userType });
        await user.save();
        res.send("signup successfull");
      }
    });
  } catch (err) {
    console.log(err);
  }
});
signupRouter.get("/data", async (req, res) => {
  let users = await UserModel.find();
  res.send(users);
});
module.exports = { signupRouter };
