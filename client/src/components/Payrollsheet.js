import React from "react";
import EmployeeModal from "./EmployeeModals";






const Payrollsheet = () => {

 



    
  
  
    return (

      
    <div  id="table">
    <h2>Payroll Sheet</h2>
    <EmployeeModal/>
        
      <table  className='table' >
        <thead >
          
        <tr>
          <th scope="col">Employee #</th>
          <th scope="col">Name</th>
          <th scope="col">Hours Worked</th>
          <th scope="col">Hourly Rate</th>
        </tr>
        </thead>
        <tbody>
        
          <tr>
            <th ></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      
        </tbody>
   </table>
   

      
     
      
       </div>

 
    );
  };
  
  export default Payrollsheet;