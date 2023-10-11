const footerModel = require('../models/footerModel');

createFooter = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a footer',
    });
  }

  const footer = new footerModel(body);

  if (!footer) {
    return res.status(400).json({ success: false, message: err });
  }

  footer
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: footer._id,
        message: 'Footer created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Footer not created!',
      });
    });
}

updateFooter = async (req, res) => {
  try {
    const footer = await footerModel.findOne({ _id: req.params.id });

    if (!footer) {
      return res.status(404).json({
        success: false,
        message: 'Footer not found',
      });
    }

    footer.footerMainTitle = req.body.footerMainTitle;
    footer.footerMainTitle_en = req.body.footerMainTitle_en;
    footer.footerMainText = req.body.footerMainText;
    footer.footerMainText_en = req.body.footerMainText_en;
    footer.footerIcon = req.body.footerIcon;
    footer.footerIcon1 = req.body.footerIcon1;
    footer.footerIcon2 = req.body.footerIcon2;
    footer.footerIcon3 = req.body.footerIcon3;
    footer.footerIcon4 = req.body.footerIcon4;
    footer.footerTitle = req.body.footerTitle;
    footer.footerTitle_en = req.body.footerTitle_en;
    footer.footerTitleLink = req.body.footerTitleLink;
    footer.footerTitleLink_en = req.body.footerTitleLink_en;
    footer.footerTitleLink1 = req.body.footerTitleLink1;
    footer.footerTitleLink1_en = req.body.footerTitleLink1_en;
    footer.footerTitleLink2 = req.body.footerTitleLink2;
    footer.footerTitleLink2_en = req.body.footerTitleLink2_en;
    footer.footerTitleLink3 = req.body.footerTitleLink3;
    footer.footerTitleLink3_en = req.body.footerTitleLink3_en;
    footer.footerTitleLink4 = req.body.footerTitleLink4;
    footer.footerTitleLink4_en = req.body.footerTitleLink4_en;
    footer.footerTitle1 = req.body.footerTitle1;
    footer.footerTitle1_en = req.body.footerTitle1_en;
    footer.footerTitle1Link = req.body.footerTitle1Link;
    footer.footerTitle1Link_en = req.body.footerTitle1Link_en;
    footer.footerTitle1Link1 = req.body.footerTitle1Link1;
    footer.footerTitle1Link1_en = req.body.footerTitle1Link1_en;
    footer.footerTitle1Link2 = req.body.footerTitle1Link2;
    footer.footerTitle1Link2_en = req.body.footerTitle1Link2_en;
    footer.footerTitle1Link3 = req.body.footerTitle1Link3;
    footer.footerTitle1Link3_en = req.body.footerTitle1Link3_en;
    footer.footerTitle1Link4 = req.body.footerTitle1Link4;
    footer.footerTitle1Link4_en = req.body.footerTitle1Link4_en;
    footer.footerTitle2 = req.body.footerTitle2;
    footer.footerTitle2_en = req.body.footerTitle2_en;
    footer.footerTitle2Link = req.body.footerTitle2Link;
    footer.footerTitle2Link_en = req.body.footerTitle2Link_en;
    footer.footerTitle2Link1 = req.body.footerTitle2Link1;
    footer.footerTitle2Link1_en = req.body.footerTitle2Link1_en;
    footer.footerTitle2Link2 = req.body.footerTitle2Link2;
    footer.footerTitle2Link2_en = req.body.footerTitle2Link2_en;
    footer.footerTitle2Link3 = req.body.footerTitle2Link3;
    footer.footerTitle2Link3_en = req.body.footerTitle2Link3_en;
    footer.footerTitle2Link4 = req.body.footerTitle2Link4;
    footer.footerTitle2Link4_en = req.body.footerTitle2Link4_en;
    footer.footerTitle3 = req.body.footerTitle3;
    footer.footerTitle3_en = req.body.footerTitle3_en;
    footer.footerTitle3Link = req.body.footerTitle3Link;
    footer.footerTitle3Link_en = req.body.footerTitle3Link_en;
    footer.footerTitle3Link1 = req.body.footerTitle3Link1;
    footer.footerTitle3Link1_en = req.body.footerTitle3Link1_en;
    footer.footerTitle3Link2 = req.body.footerTitle3Link2;
    footer.footerTitle3Link2_en = req.body.footerTitle3Link2_en;
    footer.footerTitle3Link3 = req.body.footerTitle3Link3;
    footer.footerTitle3Link3_en = req.body.footerTitle3Link3_en;
    footer.footerTitle3Link4 = req.body.footerTitle3Link4;
    footer.footerTitle3Link4_en = req.body.footerTitle3Link4_en;

    footer
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: footer._id,
          message: 'Footer updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Footer not updated!',
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

deleteFooter = async (req, res) => {
  try {
    const footer = await footerModel.findOneAndDelete({ _id: req.params.id });

    if (!footer) {
      return res
        .status(404)
        .json({ success: false, message: 'Footer not found!' });
    }

    return res.status(200).json({ success: true, data: footer });
  } catch (error) {
    console.log(error);
  }
}

getFooterById = async (req, res) => {
  try {
    const footer = await footerModel.findOne({ _id: req.params.id });
    if (!footer) {
      return res
        .status(404)
        .json({ success: false, message: 'Footer not found!' });
    }
    return res.status(200).json({ success: true, data: footer });
  } catch (error) {
    console.log(error);
  }
}

getFooters = async (req, res) => {
  try {
    const footers = await footerModel.find({});
    return res.status(200).json({ success: true, data: footers });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createFooter,
  updateFooter,
  deleteFooter,
  getFooters,
  getFooterById,
}