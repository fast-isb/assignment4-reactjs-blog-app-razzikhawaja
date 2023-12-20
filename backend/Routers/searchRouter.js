const express = require('express');
const router = express.Router();
const searchController = require('../Controller/searchController');

router.get('/search',function (req,res) {searchController.searchPosts});

module.exports = router;
