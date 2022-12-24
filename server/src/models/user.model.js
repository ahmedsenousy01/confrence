const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: String,
  email: String,
  password: String,
  registeredSummits: {
    type: [Types.ObjectId],
    ref: 'summits'
  }
});

module.exports = model('users', schema);