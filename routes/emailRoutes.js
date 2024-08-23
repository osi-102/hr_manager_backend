const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/emailController');
const router = express.Router();

router.post('/create', createCampaign);
router.get('/campaigns', getCampaigns);

module.exports = router;
