const ContactModel = require('../models/contactModel');

const createContact = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a contact',
    });
  }

  const contact = new ContactModel(body);

  contact
    .save()
    .then((createdContact) => {
      return res.status(201).json({
        success: true,
        data: createdContact,
        message: 'Contact created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error,
        message: 'Contact not created!',
      });
    });
};

const updateContact = async (req, res) => {
  try {
    const contact = await ContactModel.findOne({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    const updateData = req.body; // Assuming all fields are present in the request body
    Object.assign(contact, updateData);

    const updatedContact = await contact.save();
    return res.status(200).json({
      success: true,
      data: updatedContact,
      message: 'Contact updated!',
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
      message: 'Contact not updated!',
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await ContactModel.findOneAndDelete({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    return res.status(200).json({ success: true, message: 'Contact deleted!' });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

const getContactById = async (req, res) => {
  try {
    const contact = await ContactModel.findOne({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    return res.status(200).json({ success: true, data: contact });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find({});
    return res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports = {
  createContact,
  updateContact,
  deleteContact,
  getContacts,
  getContactById,
};