import React from 'react';
import { useQuery } from '@apollo/client';

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
};

export default Home;
