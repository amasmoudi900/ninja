const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type:String, required:true, unique: true},
  pwd: String,
  confirmPwd: String,
  role:String
});

userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);
module.exports = user;
