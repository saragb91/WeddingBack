const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    roles: {
      type: String,
      enum: ['SYSTEM', 'LIMITED', 'SANFER'],
      default: 'SYSTEM',
    },
    presence: String,
    allergies: {
      type: Array,
    },
    bus: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
