const DocumentModel = require("../models/documentModel");

createDocument = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: "You must provide a document",
    });
  }

  const document = new DocumentModel(body);

  if (!document) {
    return res.status(400).json({ success: false, message: err });
  }

  document
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: document._id,
        message: "Document created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Document not created!",
      });
    });
};

updateDocument = async (req, res) => {
  try {
    const document = await DocumentModel.findOne({ _id: req.params.id });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    document.title = req.body.title;
    document.title_en = req.body.title_en;
    document.text = req.body.text;
    document.text_en = req.body.text_en;
    document.cardTitle = req.body.cardTitle;
    document.cardTitle_en = req.body.cardTitle_en;
    document.cardText = req.body.cardText;
    document.cardText_en = req.body.cardText_en;
    document.cardLink = req.body.cardLink;
    document.cardTitle1 = req.body.cardTitle1;
    document.cardTitle1_en = req.body.cardTitle1_en;
    document.cardText1 = req.body.cardText1;
    document.cardText1_en = req.body.cardText1_en;
    document.cardLink1 = req.body.cardLink1;
    document.cardTitle2 = req.body.cardTitle2;
    document.cardTitle2_en = req.body.cardTitle2_en;
    document.cardText2 = req.body.cardText2;
    document.cardText2_en = req.body.cardText2_en;
    document.cardLink2 = req.body.cardLink2;
    document.cardTitle3 = req.body.cardTitle3;
    document.cardTitle3_en = req.body.cardTitle3_en;
    document.cardText3 = req.body.cardText3;
    document.cardText3_en = req.body.cardText3_en;
    document.cardLink3 = req.body.cardLink3;
    document.cardTitle4 = req.body.cardTitle4;
    document.cardTitle4_en = req.body.cardTitle4_en;
    document.cardText4 = req.body.cardText4;
    document.cardText4_en = req.body.cardText4_en;
    document.cardLink4 = req.body.cardLink4;
    document.cardTitle5 = req.body.cardTitle5;
    document.cardTitle5_en = req.body.cardTitle5_en;
    document.cardText5 = req.body.cardText5;
    document.cardText5_en = req.body.cardText5_en;
    document.cardLink5 = req.body.cardLink5;

    document
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: document._id,
          message: "Document updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Document not updated!",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

deleteDocument = async (req, res) => {
  try {
    const document = await DocumentModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!document) {
      return res
        .status(404)
        .json({ success: false, error: `Document not found` });
    }

    return res.status(200).json({ success: true, data: document });
  } catch (error) {
    console.log(error);
  }
}

getDocumentById = async (req, res) => {
  try {
    const document = await DocumentModel.findOne({ _id: req.params.id });

    if (!document) {
      return res
        .status(404)
        .json({ success: false, error: `Document not found` });
    }
    return res.status(200).json({ success: true, data: document });
  } catch (error) {
    console.log(error);
  }
}

getDocuments = async (req, res) => {
  try {
    const documents = await DocumentModel.find({});
    return res.status(200).json({ success: true, data: documents });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createDocument,
  updateDocument,
  deleteDocument,
  getDocuments,
  getDocumentById,
};