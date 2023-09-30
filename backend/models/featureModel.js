const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExtraFeatureSchema = new Schema({
  theFeature: { type: String },
});

module.exports = mongoose.model("extraFeatures", ExtraFeatureSchema);
