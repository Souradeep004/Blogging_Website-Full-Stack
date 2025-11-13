import React from 'react';
import BlogCard from '../components/BlogCard';

function HomePage({ blogs }) {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>My Blogs</h1>
        <p>All the blogs you've created so far.</p>
      </header>

      <div className="blog-list">
        {blogs.length === 0 ? (
          <p className="no-blogs-msg">You haven't written any blogs yet. Click "New Blog" to get started!</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;