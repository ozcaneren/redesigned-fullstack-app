const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnglishExtraFeatureSchema = new Schema({
  EnglishFeature: { type: String },
});

module.exports = mongoose.model("EnglishExtraFeatures", EnglishExtraFeatureSchema);
