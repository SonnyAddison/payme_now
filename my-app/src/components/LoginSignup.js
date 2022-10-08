import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
    
    <>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
     
      </Tab>
      <Tab eventKey="profile" title="Profile">
       
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
       
      </Tab>
    </Tabs>
   
    <Button variant="primary" onClick={handleShow}>
      Add Employee
    </Button>

    <Modal  className="modalBody" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        
        <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe"/>
  <input type="submit" value="Submit"/>
       
        

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
 );
};

export default Login;