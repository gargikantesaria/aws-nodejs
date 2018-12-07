var mon=require("mongoose");
mon.connect(process.env.DB_URL);

var userStructure = mon.Schema({
  userEmail: String,
  userPassword: String,
  userpicture: String,
  userName: String,
  userGender: String,
  seasons: String
});

var userSchema = mon.model('users', userStructure);

module.exports = userSchema;