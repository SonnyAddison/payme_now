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






<<<<<<< HEAD
=======
import Home from './pages/Home';
import Profile from './pages/Payroll';
import Signup from './pages/Signup';
import Login from './pages/Login';
>>>>>>> main




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
          
      </Routes>
      
    
      </Container>

         
  );
}

export default App;

