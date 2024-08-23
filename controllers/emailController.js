const EmailCampaign = require('../models/EmailCampaign');
const sendEmail = require('../utils/emailSender');
const generateEmailContent = require('../utils/openaiClient');

const createCampaign = async (req, res) => {
  const { subject, content, recipient } = req.body;
  try {
    const generatedContent = await generateEmailContent(content);
    const campaign = new EmailCampaign({
      subject,
      content: generatedContent,
      recipient,
    });
    await campaign.save();
    await sendEmail(recipient, subject, generatedContent);
    res.status(201).json({ message: 'Email campaign created and email sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create email campaign' });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await EmailCampaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
};

module.exports = { createCampaign, getCampaigns };
