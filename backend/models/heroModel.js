const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  mainText: { type: String },
  mainText_en: { type: String },
  subText: { type: String },
  subText_en: { type: String },
});

module.exports = mongoose.model("Hero", HeroSchema);