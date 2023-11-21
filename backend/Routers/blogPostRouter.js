const express = require('express');
const router = express.Router();
const blogPostController = require('../Controller/blogPostController');

router.post('/posts', blogPostController.createPost);
router.put('/posts/:postId', blogPostController.updatePost);
router.delete('/posts/:postId', blogPostController.deletePost);
router.get('/posts', blogPostController.getPosts);

module.exports = router;
