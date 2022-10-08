import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/LoginSignup'
import Header from './components/Header';
import PromisePage from './components/Promise';
import './App.css'
import Payroll from './components/Payroll';








function App() {
  return (
  <div className="main">
      < Header />
      <Routes>
        
        <Route path="/payrollsheet" element = {<Payroll />}/>
          
        <Route path="/login" element= {<Login />}/>
          
        <Route path="/promise" element= {<PromisePage />}/>
          
      </Routes>
 </div>
         
  );
}

export default App;

