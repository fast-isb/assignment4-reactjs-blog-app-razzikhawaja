const express = require('express');
const router = express.Router();
const userInteractionController = require('../Controller/userInteractionController');

router.post('/follow/:userId',function(req,res){userInteractionController.followUser});
router.get('/feed', function(req,res){userInteractionController.getUserFeed});
router.get('/notifications',function(req,res) {userInteractionController.getNotifications});

module.exports = router;
