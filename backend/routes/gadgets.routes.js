const express = require("express");
const gadgetsRouter = express.Router();
const { GadgetsModel } = require("../models/gadgets.models");

gadgetsRouter.get("/backendview", async (req, res) => {
  const params = req.query;
  try {
    const users = await GadgetsModel.find(params);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

gadgetsRouter.post("/backendcreate", async (req, res) => {
  const payload = req.body;
  try {
    const user = new GadgetsModel(payload);
    await user.save();
    res.send({ msg: "Created successfully" });
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

gadgetsRouter.patch("/backendedit", async (req, res) => {
  const userID = req.params.userID;
  const payload = req.body;
  try {
    const query = await GadgetsModel.findByIdAndUpdate(
      { _id: userID },
      payload
    );
    console.log(query);
    res.send("Updated");
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong, try again later" });
  }
});

gadgetsRouter.delete("/backenddelete", async (req, res) => {
  const userID = req.params.userID;
  try {
    await GadgetsModel.findByIdAndDelete({ _id: userID });
    res.send(`User ${userID} deleted successfully`);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong, try again later" });
  }
});

module.exports = { gadgetsRouter };
