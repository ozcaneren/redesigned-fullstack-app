const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomEnglish = new Schema({
  roomType_en: { type: String },
  roomTitle_en: { type: String },
  roomDescription_en: { type: String },
  roomShortDescription_en: { type: String },
  roomFeatures_en: { type: Array },
  roomVisibility_en: { type: Boolean },
});

module.exports = mongoose.model("rooms_en", RoomEnglish);