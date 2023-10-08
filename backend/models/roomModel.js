const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema({
  roomType: { type: String },
  roomTitle: { type: String },
  roomDescription: { type: String },
  roomShortDescription: { type: String },
  roomFeatures: { type: Array },
  roomVisibility: { type: Boolean },
});

module.exports = mongoose.model("rooms", Room);
