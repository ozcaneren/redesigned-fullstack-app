const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema({
  type: { type: String },
  title: { type: String },
  description: { type: String },
  shortDescription: { type: String },
  features: { type: Array },
  price: { type: Number },
  visibility: { type: Boolean },
});

module.exports = mongoose.model("rooms", Room);
