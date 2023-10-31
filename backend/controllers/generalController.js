const General = require("../models/generalModel").model("General");

exports.getGeneral = async (req, res) => {
  try {
    const generalSettings = await General.find({});
    res.status(200).json(generalSettings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGeneral = async (req, res) => {
  try {
    const updatedGeneralSettings = await General.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedGeneralSettings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGeneral = async (req, res) => {
  try {
    const newGeneralSettings = new General(req.body);
    const generalSettings = await newGeneralSettings.save();
    res.status(201).json(generalSettings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
