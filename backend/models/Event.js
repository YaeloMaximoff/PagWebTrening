const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({

  title: String,
  category: String,
  description: String,
  date: String,
  time: String,
  zone: String,
  image: String,
  creator: String,
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);