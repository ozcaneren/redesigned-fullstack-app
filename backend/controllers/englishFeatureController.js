const EnglishExtraFeature = require('../models/englishFeatureModel');

createEnglishExtraFeature = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a feature',
    });
  }

  const extraFeature = new EnglishExtraFeature(body);

  if (!extraFeature) {
    return res.status(400).json({ success: false, error: err });
  }

  extraFeature
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: extraFeature._id,
        message: 'Extra feature created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Extra feature not created!',
      });
    });
}

updateEnglishExtraFeature = async (req, res) => {
  try {
    const extraFeature = await EnglishExtraFeature.findOne({ _id: req.params.id });

    if (!extraFeature) {
      return res.status(404).json({
        success: false,
        error: 'Extra feature not found',
      });
    }

    extraFeature.EnglishFeature = req.body.EnglishFeature;

    const updatedExtraFeature = await extraFeature.save();
    return res.status(200).json({
      success: true,
      id: updatedExtraFeature._id,
      message: 'Extra feature updated!',
    });
  } catch (err) {
    return res.status(404).json({
      err,
      message: 'Extra feature not updated!',
    });
  }
}

deleteEnglishExtraFeature = async (req, res) => {
  try {
    const extraFeature = await EnglishExtraFeature.findOneAndDelete({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).json({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getEnglishExtraFeatureById = async (req, res) => {
  try {
    const extraFeature = await EnglishExtraFeature.findOne({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).jsonTurkish({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getEnglishExtraFeatures = async (req, res) => {
  try {
    const extraFeatures = await EnglishExtraFeature.find({});
    if (!extraFeatures.length) {
      return res.status(404).json({ success: false, error: 'Extra features not found' });
    }
    return res.status(200).json({ success: true, data: extraFeatures });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

module.exports = {
  createEnglishExtraFeature,
  updateEnglishExtraFeature,
  deleteEnglishExtraFeature,
  getEnglishExtraFeatures,
  getEnglishExtraFeatureById,
}