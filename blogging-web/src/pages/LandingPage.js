// src/pages/LandingPage.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import BlogCard from '../components/BlogCard';

// Mock data is now passed in as a prop
function LandingPage({ publicBlogs }) { // <-- 1. Receive prop
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 2. Filter the 'publicBlogs' prop
  const filteredBlogs = publicBlogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      <header className="landing-header">
        <h1>Discover Your Next Great Read</h1>
        <p>Explore articles, stories, and tutorials from creators around the world.</p>
      </header>
      
      <div className="search-and-filter">
        <SearchBar onSearch={setSearchTerm} />
        <Categories onSelectCategory={setSelectedCategory} />
      </div>

      <div className="blog-list">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <p className="no-blogs-msg">No blogs found. Try a different search or category!</p>
        )}
      </div>
    </div>
  );
}

export default LandingPage;