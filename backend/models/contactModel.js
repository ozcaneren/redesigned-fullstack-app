const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  mainTitle: { type: String },
  mainTitle_en: { type: String },
  cardText: { type: String },
  cardValue: { type: String },
  cardText1: { type: String },
  cardValue1: { type: String },
  cardText2: { type: String },
  cardValue2: { type: String },
  cardText3: { type: String },
  cardValue3: { type: String },
  cardText4: { type: String },
  cardValue4: { type: String },
  cardText5: { type: String },
  cardValue5: { type: String },
});

module.exports = mongoose.model("Contacts", ContactSchema);
