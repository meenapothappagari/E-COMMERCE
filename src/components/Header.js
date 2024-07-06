
import React from 'react';

function Header({ cartCount, openLoginForm, setSearchTerm }) {
  return (
    <header className='heading'>
      <h1>E-Commerce</h1>
      <div className='main-search'>
        <input
          type='search'
          className='xxx'
          placeholder='Search here...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='btn'>
        <button
          onClick={openLoginForm}
          style={{
            backgroundColor: '#25323f',
            color: ' rgb(251, 143, 208)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '17px',
          }}
        >
          Login
        </button>
      </div>
      <div className='cart'>
        <span>Cart: {cartCount}</span>
      </div>
    </header>
  );
}

export default Header;





