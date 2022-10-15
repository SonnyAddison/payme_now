//Presents page header and section plus footer
//add picture to Header

import React from 'react';

const styles = {
  headerStyle: {
    background: '#CF4FC6',
  },
};

export default function Tagline() {
  // from render element lesson notes must hav JSX 
  return (
    <nav style={styles.headerStyle} className="taglinesection">
    <div className="container">
      <p>Payme Now - We save your time with payroll!</p>
      {/* <h3><img src={mypic} style={{width:200pt;height:200pt; position: absolute; z-index: 10; padding-right: 10pt; margin: 60pt; align-content: flex-start;}}></h3> */}
      {/* <image src={Mypic} alt="Laura Sandura Image"/> */}
      <ul className="tagline">
        {/* <li>Full Stack Coding Bootcamp Graduate 2022</li> */}
      </ul>
    </div>
    </nav>
  );
}
