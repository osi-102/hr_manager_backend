const HRContact = require('../models/HRContact');

const createContact = async (req, res) => {
  const { name, email } = req.body;
  try {
    const contact = new HRContact({ name, email });
    await contact.save();
    res.status(201).json({ message: 'HR contact created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create HR contact' });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await HRContact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

module.exports = { createContact, getContacts };
