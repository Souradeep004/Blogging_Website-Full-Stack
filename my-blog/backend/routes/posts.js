const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  searchPosts
} = require('../controllers/postController');

const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getPosts);
router.get('/search', searchPosts);
router.get('/:id', getPost);

// Protected routes (require authentication)
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;