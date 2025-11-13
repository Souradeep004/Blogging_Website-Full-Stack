// src/components/BlogModal.js
import React, { useState } from 'react';
import mammoth from 'mammoth';

function BlogModal({ onClose, onAddBlog }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false); // <-- 1. Add new state

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setIsFileUploaded(false); // Reset on new upload
    const fileName = file.name.replace(/\.(doc|docx)$/i, '');
    setTitle(fileName);

    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;

      // --- 2. THIS IS THE BIG CHANGE ---
      // We switch from extractRawText to convertToHtml
      mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
        .then(result => {
          // result.value is now an HTML string (e.g., "<p>Hello</p><img src='data:...' />")
          setContent(result.value); 
          setIsUploading(false);
          setIsFileUploaded(true); // <-- 3. Mark file as uploaded
        })
        .catch(err => {
          console.error('Error reading docx file:', err);
          alert('Could not read the document. Please copy and paste the text manually.');
          setIsUploading(false);
        });
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !content) {
      alert('Please fill out all fields.');
      return;
    }
    const newBlog = { id: Date.now(), title, category, content };
    onAddBlog(newBlog);
    onClose();
  };

  // Helper to get text for the textarea
  const getTextAreaValue = () => {
    if (isUploading) return "Loading content from file...";
    if (isFileUploaded) return "Content (including images) loaded from file. Ready to publish.";
    return content; // Only show 'content' if user is typing manually
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>Create New Blog</h2>
          
          <div className="form-group upload-section">
            <label htmlFor="file-upload" className="custom-file-upload">
              Upload Word Doc
            </label>
            <input 
              id="file-upload" 
              type="file"
              accept=".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
            />
            <span className="upload-hint">
              {isUploading ? "Reading file..." : "This will fill the Title & Content."}
            </span>
          </div>

          <div className="separator-text">or write manually</div>

          <div className="form-group">
            <label htmlFor="title">Blog Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., My First React App"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Tech, Travel, Food"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Blog Content</label>
            
            {/* 4. Update textarea props */}
            <textarea
              id="content"
              rows="10"
              value={getTextAreaValue()}
              onChange={(e) => {
                setContent(e.target.value);
                setIsFileUploaded(false); // If user types, they are in manual mode
              }}
              placeholder={"Write your blog post here..."}
              disabled={isUploading || isFileUploaded} // Disable if file is uploaded
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isUploading}>
              {isUploading ? "Please wait..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogModal;