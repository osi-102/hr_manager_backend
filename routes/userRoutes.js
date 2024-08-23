const express = require('express');
const { getUser, updateUser } = require('../controllers/userController');
const verifyToken = require('../config/auth');

const router = express.Router();

router.get('/me', verifyToken, getUser);
router.put('/me', verifyToken, updateUser);

module.exports = router;
