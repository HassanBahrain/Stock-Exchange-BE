const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role:{
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  emailAddress:{
    type: String,
    required:true
  },
  password:{
    type: String,
    required:true
  },
  phoneNumber:{
    type: String,
    required:true
  }
}, {timestamps:true});

const User = mongoose.model('User', UserSchema);

module.exports = User;