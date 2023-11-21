const express = require('express');
const router = express.Router();
const userInteractionController = require('../Controller/userInteractionController');

router.post('/follow/:userId', userInteractionController.followUser);
router.get('/feed', userInteractionController.getUserFeed);
router.get('/notifications', userInteractionController.getNotifications);

module.exports = router;
