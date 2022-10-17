import React from "react";
import EmployeeModal from "./EmployeeModals";
import { useQuery } from "@apollo/client";
import {QUERY_EMPLOYEE_PAYROLLPAGE} from "../utils/queries";





const Payrollsheet = () => {

  const { loading, data} =  useQuery(QUERY_EMPLOYEE_PAYROLLPAGE);
  const employeeData = data?.employees
  console.log(employeeData)
  if(loading){
    return ( '....Loading')
  }
    
  
  
    return (

      
    <div  id="table">
    <h2>Payroll Sheet</h2>
    <EmployeeModal/>
 
      <table  className='table' >
        <thead >
       
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Hours Worked</th>
          <th scope="col">Hourly Rate</th>
        </tr>
        </thead>
        <tbody>
        {employeeData.map(employee => (
          <tr key={employee._id}>
            <th >{employee._id}</th>
            <td >{employee.name}</td>
            <td >{employee.hoursWorked}</td>
            <td >{employee.payRate} </td>
          </tr>
        ))}
          
      
        </tbody>
   </table>
   

      
     
      
       </div>

 
    );
  };
  
  export default Payrollsheet;