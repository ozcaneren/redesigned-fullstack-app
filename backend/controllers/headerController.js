const headerModel = require("../models/headerModel");

createHeader = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: "You must provide a header",
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
        message: "Header created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Header not created!",
      });
    });
};

updateHeader = async (req, res) => {
  try {
    const header = await headerModel.findOne({ _id: req.params.id });

    if (!header) {
      return res.status(404).json({
        success: false,
        message: "Header not found",
      });
    }

    header.headerTitle = req.body.headerTitle;
    header.headerTitle_en = req.body.headerTitle_en;
    header.headerText = req.body.headerText;
    header.headerText_en = req.body.headerText_en;
    header.headerTextDropdown = req.body.headerTextDropdown;
    header.headerTextDropdown_en = req.body.headerTextDropdown_en;
    header.headerTextDropdown1 = req.body.headerTextDropdown1;
    header.headerTextDropdown1_en = req.body.headerTextDropdown1_en;
    header.headerTextDropdown2 = req.body.headerTextDropdown2;
    header.headerTextDropdown2_en = req.body.headerTextDropdown2_en;
    header.headerTextDropdown3 = req.body.headerTextDropdown3;
    header.headerTextDropdown3_en = req.body.headerTextDropdown3_en;
    header.headerText1 = req.body.headerText1;
    header.headerText1_en = req.body.headerText1_en;
    header.headerText1Dropdown = req.body.headerText1Dropdown;
    header.headerText1Dropdown_en = req.body.headerText1Dropdown_en;
    header.headerText1Dropdown1 = req.body.headerText1Dropdown1;
    header.headerText1Dropdown1_en = req.body.headerText1Dropdown1_en;
    header.headerText1Dropdown2 = req.body.headerText1Dropdown2;
    header.headerText1Dropdown2_en = req.body.headerText1Dropdown2_en;
    header.headerText1Dropdown3 = req.body.headerText1Dropdown3;
    header.headerText1Dropdown3_en = req.body.headerText1Dropdown3_en;
    header.headerText2 = req.body.headerText2;
    header.headerText2_en = req.body.headerText2_en;
    header.headerText2Dropdown = req.body.headerText2Dropdown;
    header.headerText2Dropdown_en = req.body.headerText2Dropdown_en;
    header.headerText2Dropdown1 = req.body.headerText2Dropdown1;
    header.headerText2Dropdown1_en = req.body.headerText2Dropdown1_en;
    header.headerText2Dropdown2 = req.body.headerText2Dropdown2;
    header.headerText2Dropdown2_en = req.body.headerText2Dropdown2_en;
    header.headerText2Dropdown3 = req.body.headerText2Dropdown3;
    header.headerText2Dropdown3_en = req.body.headerText2Dropdown3_en;
    header.headerText3 = req.body.headerText3;
    header.headerText3_en = req.body.headerText3_en;
    header.headerText3Dropdown = req.body.headerText3Dropdown;
    header.headerText3Dropdown_en = req.body.headerText3Dropdown_en;
    header.headerText3Dropdown1 = req.body.headerText3Dropdown1;
    header.headerText3Dropdown1_en = req.body.headerText3Dropdown1_en;
    header.headerText3Dropdown2 = req.body.headerText3Dropdown2;
    header.headerText3Dropdown2_en = req.body.headerText3Dropdown2_en;
    header.headerText3Dropdown3 = req.body.headerText3Dropdown3;
    header.headerText3Dropdown3_en = req.body.headerText3Dropdown3_en;
    header.headerText4 = req.body.headerText4;
    header.headerText4_en = req.body.headerText4_en;
    header.headerText4Dropdown = req.body.headerText4Dropdown;
    header.headerText4Dropdown_en = req.body.headerText4Dropdown_en;
    header.headerText4Dropdown1 = req.body.headerText4Dropdown1;
    header.headerText4Dropdown1_en = req.body.headerText4Dropdown1_en;
    header.headerText4Dropdown2 = req.body.headerText4Dropdown2;
    header.headerText4Dropdown2_en = req.body.headerText4Dropdown2_en;
    header.headerText4Dropdown3 = req.body.headerText4Dropdown3;
    header.headerText4Dropdown3_en = req.body.headerText4Dropdown3_en;
    header.headerText5 = req.body.headerText5;
    header.headerText5_en = req.body.headerText5_en;
    header.headerText5Dropdown = req.body.headerText5Dropdown;
    header.headerText5Dropdown_en = req.body.headerText5Dropdown_en;
    header.headerText5Dropdown1 = req.body.headerText5Dropdown1;
    header.headerText5Dropdown1_en = req.body.headerText5Dropdown1_en;
    header.headerText5Dropdown2 = req.body.headerText5Dropdown2;
    header.headerText5Dropdown2_en = req.body.headerText5Dropdown2_en;
    header.headerText5Dropdown3 = req.body.headerText5Dropdown3;
    header.headerText5Dropdown3_en = req.body.headerText5Dropdown3_en;

    header
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: header._id,
          message: "Header updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Header not updated!",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

deleteHeader = async (req, res) => {
  try {
    const header = await headerModel.findOneAndDelete({ _id: req.params.id });

    if (!header) {
      return res
        .status(404)
        .json({ success: false, message: "Header not found!" });
    }

    return res.status(200).json({ success: true, data: header });
  } catch (error) {
    console.log(error);
  }
};

getHeaderById = async (req, res) => {
  try {
    const header = await headerModel.findOne({ _id: req.params.id });
    if (!header) {
      return res
        .status(404)
        .json({ success: false, message: "Header not found!" });
    }
    return res.status(200).json({ success: true, data: header });
  } catch (error) {
    console.log(error);
  }
};

getHeaders = async (req, res) => {
  try {
    const headers = await headerModel.find({});
    return res.status(200).json({ success: true, data: headers });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createHeader,
  updateHeader,
  deleteHeader,
  getHeaders,
  getHeaderById,
};
