const { Schema, model } = require('mongoose');

const schema = new Schema({
  city: String,
  date: Date,
  numberOfAttendees: Number,
  venue: String,
  cardImageUrl: String,
  bannerImageUrl: String
});

module.exports = model('summits', schema);