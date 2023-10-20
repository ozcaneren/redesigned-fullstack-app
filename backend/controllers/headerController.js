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
