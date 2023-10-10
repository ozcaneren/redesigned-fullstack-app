const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
  headerTitle: { type: String },
  headerTitle_en: { type: String },
  headerText: { type: String },
  headerText_en: { type: String },
  headerText1: { type: String },
  headerText1_en: { type: String },
  headerText2: { type: String },
  headerText2_en: { type: String },
  headerText3: { type: String },
  headerText3_en: { type: String },
  headerText4: { type: String },
  headerText4_en: { type: String },
  headerText5: { type: String },
  headerText5_en: { type: String },
  headerDropdown: { type: String },
  headerDropdown_en: { type: String },
  headerDropdown1: { type: String },
  headerDropdown1_en: { type: String },
  headerDropdown2: { type: String },
  headerDropdown2_en: { type: String },
  headerDropdown3: { type: String },
  headerDropdown3_en: { type: String },
});

module.exports = mongoose.model("Header", HeaderSchema);