const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  mainTitle: { type: String },
  mainTitle_en: { type: String },
  mainText: { type: String },
  mainText_en: { type: String },
  cardIcon: { type: String },
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
  cardIcon1: { type: String },
  cardTitle1: { type: String },
  cardTitle1_en: { type: String },
  cardText1: { type: String },
  cardText1_en: { type: String },
  cardIcon2: { type: String },
  cardTitle2: { type: String },
  cardTitle2_en: { type: String },
  cardText2: { type: String },
  cardText2_en: { type: String },
  cardIcon3: { type: String },
  cardTitle3: { type: String },
  cardTitle3_en: { type: String },
  cardText3: { type: String },
  cardText3_en: { type: String },
  cardIcon4: { type: String },
  cardTitle4: { type: String },
  cardTitle4_en: { type: String },
  cardText4: { type: String },
  cardText4_en: { type: String },
  cardIcon5: { type: String },
  cardTitle5: { type: String },
  cardTitle5_en: { type: String },
  cardText5: { type: String },
  cardText5_en: { type: String },

});

module.exports = mongoose.model("Service", ServiceSchema);