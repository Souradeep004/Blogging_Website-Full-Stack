// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import BlogModal from './components/BlogModal';
import BlogPostPage from './pages/BlogPostPage'; // <-- 1. Import new page
import './App.css';

// 2. Move mock data here
const MOCK_PUBLIC_BLOGS = [
  { id: 101, title: 'React Hooks Explained', category: 'Tech', content: 'A deep dive into useState and useEffect. Lorem ipsum dolor sit amet...' },
  { id: 102, title: 'My Travels in Japan', category: 'Travel', content: 'Exploring the vibrant city of Tokyo. Lorem ipsum dolor sit amet...' },
  { id: 103, title: 'The Best Sourdough Recipe', category: 'Food', content: 'Get that perfect crust and crumb. Lorem ipsum dolor sit amet...' },
  { id: 104, title: 'AI in 2025', category: 'Tech', content: 'What to expect from AI advancements. Lorem ipsum dolor sit amet...' },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('myBlogs');
    if (storedBlogs) {
      setMyBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myBlogs', JSON.stringify(myBlogs));
  }, [myBlogs]);

  // 3. This function now receives { title, category, content }
  const addBlog = (blog) => {
    // 'blog' object now contains 'content'
    setMyBlogs([blog, ...myBlogs]);
  };

  return (
    <div className="App">
      <Navbar onNewBlogClick={() => setIsModalOpen(true)} />

      <main>
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage publicBlogs={MOCK_PUBLIC_BLOGS} />} // 4. Pass mock blogs as prop
          />
          <Route path="/home" element={<HomePage blogs={myBlogs} />} />
          
          {/* 5. ADD THIS NEW ROUTE */}
          <Route 
            path="/blog/:blogId" 
            element={<BlogPostPage allBlogs={[...myBlogs, ...MOCK_PUBLIC_BLOGS]} />} 
          />
        </Routes>
      </main>

      {isModalOpen && (
        <BlogModal
          onClose={() => setIsModalOpen(false)}
          onAddBlog={addBlog}
        />
      )}
    </div>
  );
}

export default App;