import React from 'react';

function Navbar({ setCategory }) {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div className="navbar">
      <ul className="unorder">
        <li><a href="#" onClick={() => handleCategoryChange('all')}>HOME</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('electronics')}>CATEGORIES</a></li>
        <li><a href="#" onClick={() => handleCategoryChange("men's clothing")}>MEN'S</a></li>
        <li><a href="#" onClick={() => handleCategoryChange("women's clothing")}>WOMEN'S</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('jewelery')}>JEWELRY</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('perfume')}>PERFUME</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('blog')}>BLOG</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('hot-offers')}>HOT OFFERS</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
