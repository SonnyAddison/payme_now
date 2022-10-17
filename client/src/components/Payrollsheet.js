import React from "react";
import EmployeeModal from "./EmployeeModals";
import { useQuery } from "@apollo/client";
import {QUERY_EMPLOYEE_PAYROLLPAGE} from "../utils/queries"




const Payrollsheet = () => {


  const { loading, error,  data } = useQuery(QUERY_EMPLOYEE_PAYROLLPAGE)
  console.log(data)
  const employees = data?.allEmployees || [];
  console.log(loading)
  console.log(error)




    
  
  
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