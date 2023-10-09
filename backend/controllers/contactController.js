const ContactModel = require('../models/contactModel');

createContact = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      message: 'You must provide a contact',
    });
  }

  const contact = new ContactModel(body);

  if (!contact) {
    return res.status(400).json({ success: false, message: err });
  }

  contact
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: contact._id,
        message: 'Contact created!',
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Contact not created!',
      });
    });
}

updateContact = async (req, res) => {
  try {
    const contact = await ContactModel.findOne({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    contact.mainTitle = req.body.mainTitle;
    contact.mainTitle_en = req.body.mainTitle_en;
    contact.cardText = req.body.cardText;
    contact.cardValue = req.body.cardValue;
    contact.cardText1 = req.body.cardText1;
    contact.cardValue1 = req.body.cardValue1;
    contact.cardText2 = req.body.cardText2;
    contact.cardValue2 = req.body.cardValue2;
    contact.cardText3 = req.body.cardText3;
    contact.cardValue3 = req.body.cardValue3;
    contact.cardText4 = req.body.cardText4;
    contact.cardValue4 = req.body.cardValue4;
    contact.cardText5 = req.body.cardText5;
    contact.cardValue5 = req.body.cardValue5;

    const updatedContact = await contact.save();
    return res.status(200).json({
      success: true,
      id: updatedContact._id,
      message: 'Contact updated!',
    });
  } catch (err) {
    return res.status(404).json({
      err,
      message: 'Contact not updated!',
    });
  }
}

deleteContact = async (req, res) => {
  try {
    const contact = await ContactModel.findOneAndDelete({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    return res.status(200).json({ success: true, message: 'Contact deleted!' });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getContactById = async (req, res) => {
  try {
    const contact = await ContactModel.findOne({ _id: req.params.id });

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    return res.status(200).json({ success: true, data: contact });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find({});
    return res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
}

module.exports = {
  createContact,
  updateContact,
  deleteContact,
  getContacts,
  getContactById,
}