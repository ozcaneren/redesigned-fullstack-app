const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
  cardButton: { type: String },
  cardButton_en: { type: String },
});

module.exports = mongoose.model("About", AboutSchema);