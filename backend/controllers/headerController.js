const headerModel = require('../models/headerModel');

createHeader = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a header',
    });
  }

  const header = new headerModel(body);

  if (!header) {
    return res.status(400).json({ success: false, message: err });
  }

  header
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: header._id,
        message: 'Header created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Header not created!',
      });
    });
}

updateHeader = async (req, res) => {
  try{
    const header = await headerModel.findOne({ _id: req.params.id });

    if (!header) {
      return res.status(404).json({
        success: false,
        message: 'Header not found',
      });
    }

    header.headerTitle = req.body.headerTitle;
    header.headerTitle_en = req.body.headerTitle_en;
    header.headerText = req.body.headerText;
    header.headerText_en = req.body.headerText_en;
    header.headerText1 = req.body.headerText1;
    header.headerText1_en = req.body.headerText1_en;
    header.headerText2 = req.body.headerText2;
    header.headerText2_en = req.body.headerText2_en;
    header.headerText3 = req.body.headerText3;
    header.headerText3_en = req.body.headerText3_en;
    header.headerText4 = req.body.headerText4;
    header.headerText4_en = req.body.headerText4_en;
    header.headerText5 = req.body.headerText5;
    header.headerText5_en = req.body.headerText5_en;
    header.headerDropdown = req.body.headerDropdown;
    header.headerDropdown_en = req.body.headerDropdown_en;
    header.headerDropdown1 = req.body.headerDropdown1;
    header.headerDropdown1_en = req.body.headerDropdown1_en;
    header.headerDropdown2 = req.body.headerDropdown2;
    header.headerDropdown2_en = req.body.headerDropdown2_en;
    header.headerDropdown3 = req.body.headerDropdown3;
    header.headerDropdown3_en = req.body.headerDropdown3_en;

    header
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: header._id,
          message: 'Header updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Header not updated!',
        });
      });
  } catch (error) {
    console.log(error)
  }
}

deleteHeader = async (req, res) => {
  try {
    const header = await headerModel.findOneAndDelete({ _id: req.params.id });

    if (!header) {
      return res.status(404).json({ success: false, message: 'Header not found!' });
    }

    return res.status(200).json({ success: true, data: header });
  } catch (error) {
    console.log(error)
  }
}

getHeaderById = async (req, res) => {
  try {
    const header = await headerModel.findOne({ _id: req.params.id });
    if (!header) {
      return res.status(404).json({ success: false, message: 'Header not found!' });
    }
    return res.status(200).json({ success: true, data: header });
  } catch (error) {
    console.log(error)
  }
}

getHeaders = async (req, res) => {
  try {
    const headers = await headerModel.find({});
    return res.status(200).json({ success: true, data: headers });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createHeader,
  updateHeader,
  deleteHeader,
  getHeaders,
  getHeaderById,
}