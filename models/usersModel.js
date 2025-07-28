const { mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');    

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;