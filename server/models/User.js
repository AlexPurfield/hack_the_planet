const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

const User = model("User", userSchema);
module.exports = User;
