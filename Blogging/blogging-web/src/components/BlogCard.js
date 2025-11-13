// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Import Link

function BlogCard({ blog }) {
  // 2. Truncate the content for the card preview
  const previewText = blog.content ? blog.content.substring(0, 100) + '...' : 'No content available...';

  return (
    <div className="blog-card">
      <span className="blog-category">{blog.category}</span>
      <h3 className="blog-title">{blog.title}</h3>
      {/* 3. Use 'content' for the description */}
      <p className="blog-description">{previewText}</p> 
      
      {/* 4. Change button to a Link */}
      <Link to={`/blog/${blog.id}`} className="read-more-btn">
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;