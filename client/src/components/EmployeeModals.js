
import React, { useState }from "react";
import { Button, Modal } from 'react-bootstrap';
import { ADD_EMPLOYEE} from "../utils/mutations";
import { useMutation } from "@apollo/client";


const AddEmployeeModal = () => {

    const [show, setShow] = useState(false);
    const [showDel, setshowDel ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelClose = () => setshowDel(false);
    const handleDelShow = () => setshowDel(true);

    


const [ fullName, setFullName] = useState('');
const [ address, setAddress ] = useState('')
const [ phone, setPhone] = useState('')
const [ email, setEmail ] = useState('')
const [ fedTax, setFedTax ] = useState('')
const [ status, setStatus] = useState('')
const [ hourlyPay, setHourlyPay ] = useState('')
const [ stateTax, setStateTax ] = useState('')



  
    // // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
    // if (!Auth.loggedIn()) {
    //   return <Navigate to="/home" />;
    // }
 
    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "fullName"){
          setFullName(value);
      }
      if(id === "address"){
          setAddress(value);
      }
      if(id === "phone"){
          setPhone(value);
      }
      if(id === "state"){
          setFedTax(value);
      }
      if(id === "zip"){
          setEmail(value);
      }
      if(id === "payRate") {
          setHourlyPay(value)
      }
      if(id === "married" || "single" || "headOfHouse") {
        setStatus(value)
      }
      if(id === "stateTax") {
        setStateTax(value)
      }
    }




    return (
      <>
        <Modal  show={showDel} onHide={handleDelClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete an Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="modalBody">
              <label for="employeeId">Employee Name:</label>
              <input type="text" id="employeeId" name="Id" ></input>
              <label for="employeeId">Employee ID:</label>
              <input type="text" id="employeeId" name="Id" ></input>
              <label for="freeform">Reason <span>(required)</span>:</label>
              <textarea id="freeform" name="freeform" rows="4" cols="50">
Enter text here...
</textarea>
            </form>
          </Modal.Body>
          <Modal.Footer>
        <Button variant="secondary" onClick={handleDelClose}>
          Close
        </Button>
        <Button variant="primary" value="delete" onClick={handleDelClose} >
          Save Changes
        </Button>
      </Modal.Footer>
        </Modal>
        <Modal   show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Employee Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <form className="modalBody">
           
  <label for="fullName">Full Name:</label>
  <input type="text" id="fullName" name="name" value={fullName} onChange = {(e) => handleInputChange(e)}/>
  <label for="address">Address:</label>
  <input type="text" id="address" name="address" value={address} onChange = {(e) => handleInputChange(e)}/>
  <label for="phone">Phone:</label>
  <input type="text" id="phone" name="phone" value={phone} onChange = {(e) => handleInputChange(e)}/>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" value={email} onChange = {(e) => handleInputChange(e)}/>
  <label for="zip">Federal Tax Rate:</label>
  <input type="text" id="federalTaxRate" name="federalTaxRate" value={fedTax} onChange = {(e) => handleInputChange(e)}/>
  <label for="payRate">Pay Rate:</label>
  <input type="text" id="hourlyPay" name="hourlyPay" placeholder="$" value={hourlyPay} onChange = {(e) => handleInputChange(e)}/>
  <label for="maritalstatus">Marital Status:</label>
       <div className="radioBtns">
      <input type="radio" id="married"
       name="maritalStatus" value={status} onChange = {(e) => handleInputChange(e)}/>
      <label for="married">Married</label>

      <input type="radio" id="single"
       name="maritalStatus" value={status} onChange = {(e) => handleInputChange(e)}/>
      <label for="single">Single</label>

      <input type="radio" id="headOfHouse"
       name="maritalStatus" value={status} onChange = {(e) => handleInputChange(e)}/>
      <label for="headOfHouse">Head of Household</label>
     </div>
    

  <label for="state-tax">State Tax Rate:</label>
  <select id="stateTax" name="stateTax" value={stateTax} onChange = {(e) => handleInputChange(e)}>
    <option>Select a Rate</option>
    <option>Exempt</option>
    <option>0.8%</option>
    <option>1.3%</option>
    <option>1.8%</option>
    <option>2.7%</option>
    <option>3.6%</option>
    <option>4.2%</option>
    <option>5.0%</option>
  </select>
       
</form>
        

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
    <Button  onClick={handleShow} >
      Add Employee
    </Button>
    <Button onClick={handleDelShow}> Delete Employee</Button>
        
</>
    )
}

        


export default AddEmployeeModal;