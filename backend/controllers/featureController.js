const ExtraFeature = require('../models/featureModel');

createExtraFeature = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a feature',
    });
  }

  const extraFeature = new ExtraFeature(body);

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

updateExtraFeature = async (req, res) => {
  try {
    const extraFeature = await ExtraFeature.findOne({ _id: req.params.id });

    if (!extraFeature) {
      return res.status(404).json({
        success: false,
        error: 'Extra feature not found',
      });
    }

    extraFeature.feature = req.body.feature;
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

deleteExtraFeature = async (req, res) => {
  try {
    const extraFeature = await ExtraFeature.findOneAndDelete({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).json({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getExtraFeatureById = async (req, res) => {
  try {
    const extraFeature = await ExtraFeature.findOne({ _id: req.params.id });
    if (!extraFeature) {
      return res.status(404).json({ success: false, error: 'Extra feature not found' });
    }
    return res.status(200).json({ success: true, data: extraFeature });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getExtraFeatures = async (req, res) => {
  try {
    const extraFeatures = await ExtraFeature.find({});
    if (!extraFeatures.length) {
      return res.status(404).json({ success: false, error: 'Extra features not found' });
    }
    return res.status(200).json({ success: true, data: extraFeatures });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

module.exports = {
  createExtraFeature,
  updateExtraFeature,
  deleteExtraFeature,
  getExtraFeatures,
  getExtraFeatureById,
}

