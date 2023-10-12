const servicesModel = require('../models/servicesModel');

createServices = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide services',
    });
  }

  const services = new servicesModel(body);

  if (!services) {
    return res.status(400).json({ success: false, message: err });
  }

  services
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: services._id,
        message: 'Services created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Services not created!',
      });
    });
}

updateServices = async (req, res) => {
  try {
    const services = await servicesModel.findOne({ _id: req.params.id });

    if (!services) {
      return res.status(404).json({
        success: false,
        message: 'Services not found',
      });
    }

    
    services.mainTitle = req.body.mainTitle;
    services.mainTitle_en = req.body.mainTitle_en;
    services.mainText = req.body.mainText;
    services.mainText_en = req.body.mainText_en;
    services.cardIcon = req.body.cardIcon;
    services.cardTitle = req.body.cardTitle;
    services.cardTitle_en = req.body.cardTitle_en;
    services.cardText = req.body.cardText;
    services.cardText_en = req.body.cardText_en;
    services.cardIcon1 = req.body.cardIcon1;
    services.cardTitle1 = req.body.cardTitle1;
    services.cardTitle1_en = req.body.cardTitle1_en;
    services.cardText1 = req.body.cardText1;
    services.cardText1_en = req.body.cardText1_en;
    services.cardIcon2 = req.body.cardIcon2;
    services.cardTitle2 = req.body.cardTitle2;
    services.cardTitle2_en = req.body.cardTitle2_en;
    services.cardText2 = req.body.cardText2;
    services.cardText2_en = req.body.cardText2_en;
    services.cardIcon3 = req.body.cardIcon3;
    services.cardTitle3 = req.body.cardTitle3;
    services.cardTitle3_en = req.body.cardTitle3_en;
    services.cardText3 = req.body.cardText3;
    services.cardText3_en = req.body.cardText3_en;
    services.cardIcon4 = req.body.cardIcon4;
    services.cardTitle4 = req.body.cardTitle4;
    services.cardTitle4_en = req.body.cardTitle4_en;
    services.cardText4 = req.body.cardText4;
    services.cardText4_en = req.body.cardText4_en;
    services.cardIcon5 = req.body.cardIcon5;
    services.cardTitle5 = req.body.cardTitle5;
    services.cardTitle5_en = req.body.cardTitle5_en;
    services.cardText5 = req.body.cardText5;
    services.cardText5_en = req.body.cardText5_en;

    services
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: services._id,
          message: 'Services updated!',
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Services not updated!',
        });
      });
    }
    catch (error) {
      console.log(error);
    }
}

deleteServices = async (req, res) => {
  try {
    const services = await servicesModel.findOneAndDelete({ _id: req.params.id });

    if (!services) {
      return res
        .status(404)
        .json({ success: false, message: 'Services not found!' });
    }

    return res.status(200).json({ success: true, data: services });
  } catch (error) {
    console.log(error);
  }
}

getServicesById = async (req, res) => {
  try {
    const services = await servicesModel.findOne({ _id: req.params.id });
    if (!services) {
      return res
        .status(404)
        .json({ success: false, message: 'Services not found!' });
    }
    return res.status(200).json({ success: true, data: services });
  } catch (error) {
    console.log(error);
  }
}

getServices = async (req, res) => {
  try {
    const services = await servicesModel.find({});
    return res.status(200).json({ success: true, data: services });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createServices,
  updateServices,
  deleteServices,
  getServices,
  getServicesById,
}