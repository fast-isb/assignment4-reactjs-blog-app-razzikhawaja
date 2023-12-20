const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/register', function (req,res){authController.register});
router.post('/login', function (req,res){authController.login});
router.put('/profile', function (req,res){ authController.updateProfile});
router.get('/profile', function (req,res) {authController.getProfile});

module.exports = router;
