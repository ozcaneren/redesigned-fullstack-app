const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentCardSchema = new Schema({
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
  cardLink: { type: String },
});

const DocumentTitleSchema = new Schema({
  title: { type: String },
  title_en: { type: String },
  text: { type: String },
  text_en: { type: String },
});


const DocumentCard = mongoose.model("DocumentCard", DocumentCardSchema);
const DocumentTitle = mongoose.model("DocumentTitle", DocumentTitleSchema);

module.exports = {
  DocumentCard,
  DocumentTitle,
};