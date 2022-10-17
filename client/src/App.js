import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import SiteImage from './components/SiteImage'
import OurPromise from './Pages/Promise';
import './App.css'
import  Home  from './Pages/Home'
import Payroll from './Pages/Payroll'
import LoginSignup from './Pages/LoginSignup';
import Services from './Pages/Services'
import Landing from './Pages/Landing';
import Privacyterms from './components/PrivacyTerms';
import FaqPage from './Pages/Faq';
import LogoutPage from './Pages/LogoutPage';









function App() {
  return (
 
 
  <Container id="layout">
       < Home />
    <SiteImage/>
      
      <Routes>
        
        <Route path="/payrollsheet" element = {<Payroll />}/>
          
        <Route path="/login" element= {<LoginSignup />}/>
          
        <Route path="/promise" element= {<OurPromise />}/>

        <Route path="/services" element= {<Services />}/>

        <Route path="/" element= {<Landing />}/>

        <Route path='/privacyterms' element= {<Privacyterms/>}/>

        <Route path='/faq' element= {<FaqPage/>}/>

        <Route path='/logout' element= {<LogoutPage/>}/>
        

          
      </Routes>
      
    
      </Container>

         
  );
}

export default App;

