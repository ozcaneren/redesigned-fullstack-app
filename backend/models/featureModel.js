const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExtraFeatureSchema = new Schema({
  theFeature: { type: Array },
});

module.exports = mongoose.model("extraFeatures", ExtraFeatureSchema);
