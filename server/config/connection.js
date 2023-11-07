const mongoose = require("mongoose");
require("dotenv").config()
// git 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ecommerce-db"
);

module.exports = mongoose.connection;