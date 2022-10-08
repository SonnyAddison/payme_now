//Presents footer
//The Footer section has text or icon links to developers github and linked in profiles and profile on other platforms such as Stack, Twitter, etc.

import React from 'react';

const styles = {
  footerStyle: {
    background: '#FFFFFF',
  },
};

export default function Footer() {
    // from render element lesson notes must hav JSX 

  return (
    <nav style={styles.footerStyle} className="bottomsection">
    <div className="container">
      <ul className="bottomnav">
        <p2>2022 @ All Rights Reserved</p2>
      </ul>
    </div>
    </nav>
  )
}
