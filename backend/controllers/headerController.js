const HeaderText = require("../models/headerModel").model("HeaderText");
const HeaderLink = require("../models/headerModel").model("HeaderLink");

// HeaderText işlemleri
exports.getHeaderTexts = async (req, res) => {
  try {
    const texts = await HeaderText.find({});
    res.status(200).json(texts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHeaderTextById = async (req, res) => {
  try {
    const text = await HeaderText.findById(req.params.id);
    if (!text) {
      return res.status(404).json({ error: "HeaderText not found" });
    }
    res.status(200).json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHeaderText = async (req, res) => {
  try {
    const newText = new HeaderText(req.body);
    const text = await newText.save();
    res.status(201).json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHeaderText = async (req, res) => {
  try {
    const text = await HeaderText.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHeaderText = async (req, res) => {
  try {
    await HeaderText.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// HeaderLink işlemleri (aynı şekilde uygulanabilir)
exports.getHeaderLinks = async (req, res) => {
  try {
    const links = await HeaderLink.find({});
    res.status(200).json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHeaderLinkById = async (req, res) => {
  try {
    const link = await HeaderLink.findById(req.params.id);
    if (!link) {
      return res.status(404).json({ error: "HeaderLink not found" });
    }
    res.status(200).json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHeaderLink = async (req, res) => {
  try {
    const newLink = new HeaderLink(req.body);
    const link = await newLink.save();
    res.status(201).json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHeaderLink = async (req, res) => {
  try {
    const link = await HeaderLink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHeaderLink = async (req, res) => {
  try {
    await HeaderLink.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};