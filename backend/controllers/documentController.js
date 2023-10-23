const DocumentCard = require("../models/documentModel").DocumentCard;
const DocumentTitle = require("../models/documentModel").DocumentTitle;

exports.getDocumentCards = async (req, res) => {
  try {
    const cards = await DocumentCard.find({});
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDocumentCardById = async (req, res) => {
  try {
    const card = await DocumentCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ error: "Document Card not found" });
    }
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDocumentCard = async (req, res) => {
  try {
    const newCard = new DocumentCard(req.body);
    const card = await newCard.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDocumentCard = async (req, res) => {
  try {
    const card = await DocumentCard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDocumentCard = async (req, res) => {
  try {
    await DocumentCard.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDocumentTitles = async (req, res) => {
  try {
    const titles = await DocumentTitle.find({});
    res.status(200).json(titles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDocumentTitleById = async (req, res) => {
  try {
    const title = await DocumentTitle.findById(req.params.id);
    if (!title) {
      return res.status(404).json({ error: "Document Title not found" });
    }
    res.status(200).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDocumentTitle = async (req, res) => {
  try {
    const newTitle = new DocumentTitle(req.body);
    const title = await newTitle.save();
    res.status(201).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDocumentTitle = async (req, res) => {
  try {
    const title = await DocumentTitle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDocumentTitle = async (req, res) => {
  try {
    await DocumentTitle.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
