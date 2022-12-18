const mongoose = require("mongoose");

const gadgetsSchema = mongoose.Schema({
  image1: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  about: {
    type: String,
  },
  category: {
    type: String,
    enum: ["new"],
  },
});
const GadgetsModel = mongoose.model("gadgets", gadgetsSchema);

module.exports = { GadgetsModel };
