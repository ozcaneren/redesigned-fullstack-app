const AboutModel = require('../models/aboutModel');

createAbout = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide an about',
    });
  }

  const about = new AboutModel(body);

  if (!about) {
    return res.status(400).json({ success: false, message: err });
  }

  about
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: about._id,
        message: 'About created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'About not created!',
      });
    });
}

updateAbout = async (req, res) => {
  try {
    const about = await AboutModel.findOne({ _id: req.params.id });

    if (!about) {
      return res.status(404).json({
        success: false,
        message: 'About not found',
      });
    }

    about.cardTitle = req.body.cardTitle;
    about.cardTitle_en = req.body.cardTitle_en;
    about.cardText = req.body.cardText;
    about.cardText_en = req.body.cardText_en;
    about.cardButton = req.body.cardButton;
    about.cardButton_en = req.body.cardButton_en;
    about.cardTitle1 = req.body.cardTitle1;
    about.cardTitle1_en = req.body.cardTitle1_en;
    about.cardText1 = req.body.cardText1;
    about.cardText1_en = req.body.cardText1_en;
    about.cardButton1 = req.body.cardButton1;
    about.cardButton1_en = req.body.cardButton1_en;
    about.cardTitle2 = req.body.cardTitle2;
    about.cardTitle2_en = req.body.cardTitle2_en;
    about.cardText2 = req.body.cardText2;
    about.cardText2_en = req.body.cardText2_en;
    about.cardButton2 = req.body.cardButton2;
    about.cardButton2_en = req.body.cardButton2_en;

    about
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: about._id,
          message: 'About updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'About not updated!',
        });
      });
  } catch (error) {
    console.log(error);
  }
}

deleteAbout = async (req, res) => {
  try {
    const about = await AboutModel.findOneAndDelete({ _id: req.params.id });

    if (!about) {
      return res.status(404).json({ success: false, error: `About not found` });
    }

    return res.status(200).json({ success: true, data: about });
  } catch (error) {
    console.log(error);
  }
}

getAboutById = async (req, res) => {
  try {
    const about = await AboutModel.findOne({ _id: req.params.id });

    if (!about) {
      return res.status(404).json({ success: false, error: `About not found` });
    }
    return res.status(200).json({ success: true, data: about });
  } catch (error) {
    console.log(error);
  }
}

getAbouts = async (req, res) => {
  try {
    const abouts = await AboutModel.find({});
    return res.status(200).json({ success: true, data: abouts });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createAbout,
  updateAbout,
  deleteAbout,
  getAbouts,
  getAboutById,
}