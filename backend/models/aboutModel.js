const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
  cardButton: { type: String },
  cardButton_en: { type: String },
  cardTitle1: { type: String },
  cardTitle1_en: { type: String },
  cardText1: { type: String },
  cardText1_en: { type: String },
  cardButton1: { type: String },
  cardButton1_en: { type: String },
  cardTitle2: { type: String },
  cardTitle2_en: { type: String },
  cardText2: { type: String },
  cardText2_en: { type: String },
  cardButton2: { type: String },
  cardButton2_en: { type: String },
});

module.exports = mongoose.model("About", AboutSchema);