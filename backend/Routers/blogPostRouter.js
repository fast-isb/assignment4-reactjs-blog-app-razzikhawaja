const express = require('express');
const router = express.Router();
const blogPostController = require('../Controller/blogPostController');

router.post('/posts' ,function (req,res){blogPostController.createPost});
router.put('/posts/:postId',function (req,res) {blogPostController.updatePost});
router.delete('/posts/:postId', function (req,res){blogPostController.deletePost});
router.get('/posts', function (req,res){blogPostController.getPosts});

module.exports = router;
