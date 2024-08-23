const express = require('express');
const { createContact, getContacts } = require('../controllers/hrController');
const router = express.Router();

router.post('/create', createContact);
router.get('/contacts', getContacts);

module.exports = router;
