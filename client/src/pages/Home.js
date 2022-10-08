//notes
import React from 'react';

const styles = {
  homeStyle: {
    background: '#FFFFFF',
  },
};

export default function Home() {
  // from render element lesson notes must hav JSX 
  return (
      <nav style={styles.servicesStyle} className="homepage">
      <div className="container">
      <h5>Landing home page</h5>
        <p>Why we exist</p>
        <p>video placeholder....</p>
        <p>testimonials placeholder....</p>
        <p>Why payme now?</p>
     </div>
     </nav>
  )
}
