const express = require("express");

const loginRouter = express.Router();
const { UserModel } = require("../models/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { loginvalidate } = require("../middlewares/loginvalidate");
loginRouter.use(loginvalidate);
loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      const hashed_password = user[0].password;
      bcrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, "hush", {
            expiresIn: "1h",
          });
          res.send({
            msg: "Login successfull",
            token: token,
            userType: user[0].userType,
          });
        }
      });
    } else {
      res.send("login failed");
    }
  } catch (err) {
    console.log(err);
    res.send("Something went wrong while logging in");
  }
});

module.exports = { loginRouter };
