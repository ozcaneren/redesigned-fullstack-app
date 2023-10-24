const ServiceCard = require("../models/servicesModel").model("ServiceCard");
const ServiceTitle = require("../models/servicesModel").model("ServiceTitle");

exports.getServiceCards = async (req, res) => {
  try {
    const cards = await ServiceCard.find({});
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getServiceCardById = async (req, res) => {
  try {
    const card = await ServiceCard.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ error: "ServiceCard not found" });
    }
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createServiceCard = async (req, res) => {
  try {
    const newCard = new ServiceCard(req.body);
    const card = await newCard.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateServiceCard = async (req, res) => {
  try {
    const card = await ServiceCard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteServiceCard = async (req, res) => {
  try {
    await ServiceCard.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getServiceTitles = async (req, res) => {
  try {
    const titles = await ServiceTitle.find({});
    res.status(200).json(titles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getServiceTitleById = async (req, res) => {
  try {
    const title = await ServiceTitle.findById(req.params.id);
    if (!title) {
      return res.status(404).json({ error: "ServiceTitle not found" });
    }
    res.status(200).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createServiceTitle = async (req, res) => {
  try {
    const newTitle = new ServiceTitle(req.body);
    const title = await newTitle.save();
    res.status(201).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateServiceTitle = async (req, res) => {
  try {
    const title = await ServiceTitle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(title);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteServiceTitle = async (req, res) => {
  try {
    await ServiceTitle.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};