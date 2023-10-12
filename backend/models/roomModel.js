const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Room = new Schema({
  roomType: { type: String },
  roomTitle: { type: String },
  roomDescription: { type: String },
  roomShortDescription: { type: String },
  roomFeatures: { type: Array },
  roomVisibility: { type: Boolean },
  roomType_en: { type: String },
  roomTitle_en: { type: String },
  roomDescription_en: { type: String },
  roomShortDescription_en: { type: String },
  roomFeatures_en: { type: Array },
  roomVisibility_en: { type: Boolean },
});

module.exports = mongoose.model("rooms", Room);
