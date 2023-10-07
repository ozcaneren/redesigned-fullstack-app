const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema({
  roomType: { type: String },
  roomType_en: { type: String },
  roomTitle: { type: String },
  roomTitle_en: { type: String },
  roomDescription: { type: String },
  roomDescription_en: { type: String },
  roomShortDescription: { type: String },
  roomShortDescription_en: { type: String },
  roomFeatures: { type: Array },
  roomFeatures_en: { type: Array },
  roomVisibility: { type: Boolean },
  roomVisibility_en: { type: Boolean },
});

module.exports = mongoose.model("rooms", Room);
