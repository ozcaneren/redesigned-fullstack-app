const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceCardSchema = new Schema({
  cardIcon: { type: String },
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
});

const ServiceTitleSchema = new Schema({
  mainTitle: { type: String },
  mainTitle_en: { type: String },
  mainText: { type: String },
  mainText_en: { type: String },
});

module.exports = mongoose.model("ServiceCard", ServiceCardSchema);
module.exports = mongoose.model("ServiceTitle", ServiceTitleSchema);