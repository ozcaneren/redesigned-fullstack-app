const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  mainTitle: { type: String },
  mainTitle_en: { type: String },
  cardText: { type: String },
  cardValue: { type: String },
});

module.exports = mongoose.model("Contacts", ContactSchema);
