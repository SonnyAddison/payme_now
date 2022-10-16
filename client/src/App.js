import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import SiteImage from './media/image.png';
import OurPromise from './Pages/Promise/index.js';
import './App.css';
import Home  from './Pages/Home/index';
import Payroll from './Pages/Payroll';
import LoginSignup from './Pages/LoginSignup';
import Landing from './Pages/Landing'
import Services from './Pages/Services/Services.js';
import Privacyterms from './components/Privacyterms/Privacyterms.js';
import Support from './components/Supportfaqs/Support.js';
import Logout from './components/Logout/Logout.js';



function App() {
  return(
 
  <Container id="AppRoutes">

       < Home />
    <SiteImage/>
      
      <Routes>
        
        <Route path="/payrollsheet" element = {<Payroll />}/>
          
        <Route path="/login" element= {<LoginSignup />}/>
          
        <Route path="/promise" element= {<OurPromise />}/>

        <Route path="/services" element= {<Services />}/>

        
        <Route path="/landing" element= {<Landing />}/>

        <Route path="/logout" element= {<Logout />}/>

        <Route path="/support" element= {<Support />}/>

        <Route path="/privacyterms" element= {<Privacyterms />}/>

      </Routes>      
    
      </Container>
         
  );
}

export default App;

