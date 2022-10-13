import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Home = () => {



    return (

        <>
        <Navbar  fixed="top" id="navBar">
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="linkColor" href="/services">Services</Nav.Link>
            <Nav.Link id="linkColor" href="/promise">Promise</Nav.Link>
            <NavDropdown id="linkColor" title="Dropdown">
              <NavDropdown.Item href="/payrollsheet">Payroll Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Payroll History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">
                Log In or Sign up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </>
    )
};


export default Home;