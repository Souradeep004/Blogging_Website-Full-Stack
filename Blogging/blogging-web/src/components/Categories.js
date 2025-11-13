import React, { useState } from 'react';

const CATEGORIES = ['All', 'Tech', 'Travel', 'Food', 'Lifestyle', 'Business'];

function Categories({ onSelectCategory }) {
  const [active, setActive] = useState('All');

  const handleClick = (category) => {
    setActive(category);
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`category-tag ${active === cat ? 'active' : ''}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;