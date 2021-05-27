const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  profileName: {
    type: String,
    required: true
  },
  profileSummary: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  }
});

const users = mongoose.model('users', userSchema);

module.exports = users;
