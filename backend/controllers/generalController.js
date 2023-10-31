const General = require('../models/generalModel');

createGeneral = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'General data must be provided',
    });
  }

  const general = new General(body);

  general
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: general._id,
        message: 'General data created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'General data not created!',
      });
    });
}

updateGeneral = async (req, res) => {
  try {
    const general = await General.findOne({ _id: req.params.id });

    if (!general) {
      return res.status(404).json({
        success: false,
        message: 'General data not found',
      });
    }

    general.mainLogo = req.body.mainLogo;
    general.mailLogo = req.body.mailLogo;
    general.favicon = req.body.favicon;
    general.mainColor = req.body.mainColor;
    general.secondaryColor = req.body.secondaryColor;
    general.backgroundColor = req.body.backgroundColor;
    general.siteLabel = req.body.siteLabel;
    general.defaultMoneyType = req.body.defaultMoneyType;
    general.seoKeywords = req.body.seoKeywords;
    general.seoDescription = req.body.seoDescription;
    general.copyright = req.body.copyright;
    general.weatherCity = req.body.weatherCity;
    general.videoUrl = req.body.videoUrl;

    general
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: general._id,
          message: 'General data updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'General data not updated!',
        });
      });
  } catch (error) {
    console.log(error);
  }
}

deleteGeneral = async (req, res) => {
  try {
    const general = await General.findOneAndDelete({ _id: req.params.id });

    if (!general) {
      return res.status(404).json({ success: false, error: 'General data not found' });
    }

    return res.status(200).json({ success: true, data: general });
  } catch (error) {
    console.log(error);
  }
}

getGeneralById = async (req, res) => {
  try {
    const general = await General.findOne({ _id: req.params.id });

    if (!general) {
      return res.status(404).json({ success: false, error: 'General data not found' });
    }
    return res.status(200).json({ success: true, data: general });
  } catch (error) {
    console.log(error);
  }
}

getAllGeneralData = async (req, res) => {
  try {
    const generalData = await General.find({});
    return res.status(200).json({ success: true, data: generalData });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createGeneral,
  updateGeneral,
  deleteGeneral,
  getGeneralById,
  getAllGeneralData,
}