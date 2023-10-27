const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderTextSchema = new Schema({
  headerTitle: { type: String },
  headerTitle_en: { type: String },
});

module.exports = mongoose.model("HeaderText", HeaderTextSchema);

const HeaderLinkSchema = new Schema({
  order: { type: Number }, // Sıra numarası alanı eklendi
  headerText: { type: String },
  headerText_en: { type: String },
  headerTextDropdown: [{ type: String }],
  headerTextDropdown_en: [{ type: String }],
})

module.exports = mongoose.model("HeaderLink", HeaderLinkSchema);