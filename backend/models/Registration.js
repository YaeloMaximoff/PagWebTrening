const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },

  eventTitle: String,
  name: String,
  age: Number,
  email: String,
  phone: String,
  comments: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  'Registration',
  registrationSchema
);