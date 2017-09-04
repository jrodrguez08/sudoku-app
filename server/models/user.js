const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  gamesPlayed: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
