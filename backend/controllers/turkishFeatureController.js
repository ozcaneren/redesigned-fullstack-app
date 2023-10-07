const TurkishExtraFeature = require('../models/turkishFeatureModel');

createTurkishExtraFeature = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a feature',
    });
  }

  const extraFeature = new TurkishExtraFeature(body);

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

updateTurkishExtraFeature = async (req, res) => {
  try {
    const extraFeature = await TurkishExtraFeature.findOne({ _id: req.params.id });

    if (!extraFeature) {
      return res.status(404).json({
        success: false,
        error: 'Extra feature not found',
      });
    }

    extraFeature.TurkishFeature = req.body.TurkishFeature;

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

deleteTurkishExtraFeature = async (req, res) => {
  try {
    const extraFeature = await TurkishExtraFeature.findOneAndDelete({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).json({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getTurkishExtraFeatureById = async (req, res) => {
  try {
    const extraFeature = await TurkishExtraFeature.findOne({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).jsonTurkish({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getTurkishExtraFeatures = async (req, res) => {
  try {
    const extraFeatures = await TurkishExtraFeature.find({});
    if (!extraFeatures.length) {
      return res.status(404).json({ success: false, error: 'Extra features not found' });
    }
    return res.status(200).json({ success: true, data: extraFeatures });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

module.exports = {
  createTurkishExtraFeature,
  updateTurkishExtraFeature,
  deleteTurkishExtraFeature,
  getTurkishExtraFeatures,
  getTurkishExtraFeatureById,
}