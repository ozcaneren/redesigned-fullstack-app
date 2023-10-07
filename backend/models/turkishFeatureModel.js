const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TurkishExtraFeatureSchema = new Schema({
  TurkishFeature: { type: String },
});

module.exports = mongoose.model("TurkishExtraFeatures", TurkishExtraFeatureSchema);
