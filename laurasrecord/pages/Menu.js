//notes
import React from 'react';

const styles = {
  menuStyle: {
    background: '#FFFFFF',
  },
};

export default function Menu() {
  // from render element lesson notes must hav JSX 
  return (
      <nav style={styles.menuStyle} className="menupage">
      <div className="container">
      <h5>LogIn / Sign Up</h5>
     </div>
     </nav>
  )
}
