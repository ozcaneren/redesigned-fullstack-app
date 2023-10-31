const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeneralSchema = new Schema({
  mainLogo: { type: String },
  mailLogo: { type: String },
  favicon: { type: String },

  mainColor: { type: String },
  secondaryColor: { type: String },
  backgroundColor: { type: String },
  textColor: { type: String },

  siteLabel: { type: String },

  defaultMoneyType: { type: String },

  seoKeywords: [{ type: String }],
  seoDescription: { type: String },

  copyright: { type: String },

  weatherCity: { type: String },

  videoUrl: { type: String },
});

module.exports = mongoose.model("General", GeneralSchema);