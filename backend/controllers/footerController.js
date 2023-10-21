const FooterIcon = require("../models/footerModel").model("FooterIcon");
const FooterText = require("../models/footerModel").model("FooterText");
const FooterLink = require("../models/footerModel").model("FooterLink");


exports.getFooterIcons = async (req, res) => {
  try {
    const icons = await FooterIcon.find({});
    res.status(200).json(icons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Yeni bir Footer Icon oluştur
exports.createFooterIcon = async (req, res) => {
  try {
    const newIcon = new FooterIcon(req.body);
    const icon = await newIcon.save();
    res.status(201).json(icon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Footer Icon güncelle
exports.updateFooterIcon = async (req, res) => {
  try {
    const icon = await FooterIcon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(icon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Footer Icon sil
exports.deleteFooterIcon = async (req, res) => {
  try {
    await FooterIcon.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FooterText işlemleri
exports.getFooterTexts = async (req, res) => {
  try {
    const texts = await FooterText.find({});
    res.status(200).json(texts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFooterText = async (req, res) => {
  try {
    const newText = new FooterText(req.body);
    const text = await newText.save();
    res.status(201).json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFooterText = async (req, res) => {
  try {
    const text = await FooterText.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFooterText = async (req, res) => {
  try {
    await FooterText.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FooterLink işlemleri (aynı şekilde uygulanabilir)
exports.getFooterLinks = async (req, res) => {
  try {
    const links = await FooterLink.find({});
    res.status(200).json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFooterLink = async (req, res) => {
  try {
    const newLink = new FooterLink(req.body);
    const link = await newLink.save();
    res.status(201).json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFooterLink = async (req, res) => {
  try {
    const link = await FooterLink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFooterLink = async (req, res) => {
  try {
    await FooterLink.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};