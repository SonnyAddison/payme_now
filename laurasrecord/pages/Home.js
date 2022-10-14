//notes
import React from 'react';

<<<<<<< HEAD
import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  

  return (
    <main>
     <div class="container">
                    
    <ul class="nav nav-pills" role="tablist">
     <li class="active"><a href="#">Home</a></li>
     <li><a href="#">Services</a></li>
     <li><a href="#">Our Promise</a></li>
     <li><a href="#">Sign-In/Sign-Up</a></li>        
  </ul>
</div>
    </main>
  );
=======
const styles = {
  homeStyle: {
    background: '#FFFFFF',
  },
>>>>>>> main
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
