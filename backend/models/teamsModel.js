const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
  cardIcon: { type: String },
  cardTitle: { type: String },
  cardTitle_en: { type: String },
  cardText: { type: String },
  cardText_en: { type: String },
});

const TeamDescriptionSchema = new Schema({
  mainTitle: {type: String},
  mainTitle_en: {type: String},
  mainText: {type: String},
  mainText_en: {type: String},
});

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
module.exports = mongoose.model("TeamDescription", TeamDescriptionSchema);