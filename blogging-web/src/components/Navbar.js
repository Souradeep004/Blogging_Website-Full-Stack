import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ onNewBlogClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Blogify</div>
      <div className="nav-links">
        <NavLink to="/" end>Discover</NavLink>
        <NavLink to="/home">My Blogs</NavLink>
      </div>
      <button className="new-blog-btn" onClick={onNewBlogClick}>
        New Blog
      </button>
    </nav>
  );
}

export default Navbar;