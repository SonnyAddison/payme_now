
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

    const [allValues, setAllValues] = useState({
      address: '',
      phone: '',
      email: '',
      fedTax: '',
      status: '',
      hourlyPay:'',
      stateTax: ''

   });


   const [addEmployee, {error}] = useMutation(ADD_EMPLOYEE)

   const changeHandler = e => {
    setAllValues(allValues => {
      
      return {...allValues, [e.target.name]: e.target.value}
    })
   }

   const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addEmployee({
        ...allValues
      })
     console.log(data)
    }catch (err) {
      console.error(err)
    }
      
   }
   



    return (
      <>
        <Modal  show={showDel} onHide={handleDelClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete an Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleFormSubmit} className="modalBody">
              <label >Employee Name:</label>
              <input type="text" id="employeeId" name="Id" ></input>
              <label >Employee ID:</label>
              <input type="text" id="employeeId" name="Id" ></input>
              <label >Reason <span>(required)</span>:</label>
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
       
        <form onSubmit={handleFormSubmit} className="modalBody">
           
  <label >Full Name:</label>
  <input type="text" id="fullName" name="name"  onChange= {changeHandler} />
  <label >Address:</label>
  <input type="text" id="address" name="address"  onChange= {changeHandler} />
  <label >Phone:</label>
  <input type="text" id="phone" name="phone"  onChange= {changeHandler} />
  <label >Email:</label>
  <input type="text" id="email" name="email"  onChange= {changeHandler} />
  <label >Federal Tax Rate:</label>
  <input type="text" id="federalTaxRate" name="federalTaxRate"  onChange= {changeHandler} />
  <label >Pay Rate:</label>
  <input type="text" id="hourlyPay" name="hourlyPay" placeholder="$" onChange= {changeHandler} />
  <label >Marital Status:</label>
       <div className="radioBtns">
      <input type="radio" id="married"
       name="maritalStatus"  onChange= {changeHandler} />
      <label >Married</label>

      <input type="radio" id="single"
       name="maritalStatus"  onChange= {changeHandler} />
      <label >Single</label>

      <input type="radio" id="headOfHouse"
       name="maritalStatus" onChange= {changeHandler} />
      <label>Head of Household</label>
     </div>
    

  <label >State Tax Rate:</label>
  <select id="stateTax" name="stateTax" onChange= {changeHandler} >
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