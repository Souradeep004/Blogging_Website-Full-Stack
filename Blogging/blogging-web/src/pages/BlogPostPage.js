// src/pages/BlogPostPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogPostPage({ allBlogs }) {
  const { blogId } = useParams();
  const blog = allBlogs.find((b) => b.id.toString() === blogId);

  if (!blog) {
    return (
      <div className="page-container blog-post-page">
        <h1>Blog not found</h1>
        <Link to="/" className="back-link">Go back to Discover</Link>
      </div>
    );
  }

  return (
    <div className="page-container blog-post-page">
      <span className="blog-category">{blog.category}</span>
      <h1 className="blog-post-title">{blog.title}</h1>

      {/* --- THIS IS THE KEY CHANGE --- */}
      {/* We are replacing the .split('\n') logic with this div.
        React calls this "dangerous" because it can expose you to
        security risks (XSS) if the HTML comes from an untrusted source.
        
        Since you are the one uploading the file from your own computer,
        it is safe in this context.
      */}
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: blog.content }} 
      />
      {/* ------------------------------- */}

      <Link to={blog.id >= 101 && blog.id <= 104 ? '/' : '/home'} className="back-link">
        &larr; Back to blogs
      </Link>
    </div>
  );
}

export default BlogPostPage;