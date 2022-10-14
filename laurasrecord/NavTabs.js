import React from 'react';

const styles = {
  navStyle: {
    background: '#FFFFFF',
    
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.navStyle} className="navStyles">
    <ul className="nav nav-tabs">
      <ul className="nav-item">
        <a
          href="#services"
          onClick={() => handlePageChange('Services')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}
        >
          Our Services
        </a>
      </ul>
      <ul className="nav-item">
        <a
          href="#Promise"
          onClick={() => handlePageChange('Promise')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Promise' ? 'nav-link active' : 'nav-link'}
        >
          Our Promise
        </a>
      </ul>
      <ul className="nav-item">
        <a
          href="#Menu"
          onClick={() => handlePageChange('Menu')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Menu' ? 'nav-link active' : 'nav-link'}
        >
          Login / Sign Up
        </a>
      </ul>
    </ul>
    </div>
  );
}

export default NavTabs;
