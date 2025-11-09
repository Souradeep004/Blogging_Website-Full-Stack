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

// Allow open post creation in development or when ALLOW_OPEN_POSTS=true
const allowOpenPosts = process.env.ALLOW_OPEN_POSTS === 'true' || process.env.NODE_ENV === 'development';
const openOrProtect = allowOpenPosts ? (req, res, next) => next() : protect;

// Public routes
router.get('/', getPosts);
router.get('/search', searchPosts);
router.get('/:id', getPost);

// Protected routes (require authentication)
router.post('/', openOrProtect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

module.exports = router;