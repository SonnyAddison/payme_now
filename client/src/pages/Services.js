//notes
import React from 'react';

const styles = {
  servicesStyle: {
    background: '#FFFFFF',
  },
};

export default function Services() {
  // from render element lesson notes must hav JSX 
  return (
      <nav style={styles.servicesStyle} className="servicespage">
      <div className="container">
      <h5>Our Services</h5>
        <p>We offer pay stub services ...</p>
        <p>to be outlined soon ...</p>
     </div>
     </nav>
  )
}
