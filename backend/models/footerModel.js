const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FooterIconSchema = new Schema({
  footerIcon: { type: String },
});

module.exports = mongoose.model("FooterIcon", FooterIconSchema);

const FooterTextSchema = new Schema({
  footerTitle: { type: String },
  footerText: { type: String },
});

module.exports = mongoose.model("FooterText", FooterTextSchema);

const FooterLinkSchema = new Schema({
  footerLinkTitle: { type: String },
  footerLinkText: [{ type: String }],
});

module.exports = mongoose.model("FooterLink", FooterLinkSchema);
