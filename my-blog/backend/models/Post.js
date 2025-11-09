const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  excerpt: {
    type: String,
    required: [true, 'Please add an excerpt'],
    maxlength: [500, 'Excerpt cannot be more than 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Technology', 'Lifestyle', 'Travel', 'Food', 'Business', 'Other']
  },
  tags: [{
    type: String
  }],
  image: {
    type: String,
    default: 'no-image.jpg'
  },
  readTime: {
    type: String,
    default: '5 min read'
  },
  published: {
    type: Boolean,
    default: true
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create index for search
PostSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

module.exports = mongoose.model('Post', PostSchema);