const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
  headerTitle: { type: String },
  headerTitle_en: { type: String },
  headerText: { type: String },
  headerText_en: { type: String },
  headerTextDropdown: { type: String },
  headerTextDropdown_en: { type: String },
  headerTextDropdown1: { type: String },
  headerTextDropdown1_en: { type: String },
  headerTextDropdown2: { type: String },
  headerTextDropdown2_en: { type: String },
  headerTextDropdown3: { type: String },
  headerTextDropdown3_en: { type: String },
});

module.exports = mongoose.model("Header", HeaderSchema);
