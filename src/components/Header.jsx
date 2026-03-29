import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header-bg' />
      <div className='header-overlay' />
      <div className='header-content'>
        <p className='header-label'>Portfolio · Computer Science</p>
        <h1>Hello, I'm <em>Mary</em>.</h1>
        <p>Computer Science & Biomedical Informatics graduate who loves building things with code.</p>
      </div>
      <div className='header-scroll'>
        <div className='scroll-line' />
        <span>scroll</span>
      </div>
    </div>
  );
}

export default Header;
