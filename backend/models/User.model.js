const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
