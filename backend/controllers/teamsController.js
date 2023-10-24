const TeamMember = require("../models/teamsModel").model("TeamMember");
const TeamDescription = require("../models/teamsModel").model("TeamDescription");

exports.getTeamMembers = async (req, res) => {
  try {
    const members = await TeamMember.find({});
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTeamMemberById = async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ error: "TeamMember not found" });
    }
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const newMember = new TeamMember(req.body);
    const member = await newMember.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    await TeamMember.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTeamDescriptions = async (req, res) => {
  try {
    const descriptions = await TeamDescription.find({});
    res.status(200).json(descriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTeamDescriptionById = async (req, res) => {
  try {
    const description = await TeamDescription.findById(req.params.id);
    if (!description) {
      return res.status(404).json({ error: "TeamDescription not found" });
    }
    res.status(200).json(description);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTeamDescription = async (req, res) => {
  try {
    const newDescription = new TeamDescription(req.body);
    const description = await newDescription.save();
    res.status(201).json(description);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTeamDescription = async (req, res) => {
  try {
    const description = await TeamDescription.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(description);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTeamDescription = async (req, res) => {
  try {
    await TeamDescription.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
