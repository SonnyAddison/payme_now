import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALLEMPLOYEES, QUERY_EMPLOYEE} from "../utils/queries";
import EmployeeModal from "./EmployeeModals";


const Payrollsheet = () => {

    const { loading, data } = useQuery(QUERY_ALLEMPLOYEES);
    const employees = data?.employees || [];
    


    // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
    // const employeeData  = [useQuery(QUERY_EMPLOYEES)];
   
    const employeeId = () => { return Math.floor(Math.random() * 10000)}
    const employeeData = [
       {
        id: employeeId(),
        name: 'Johnny Cage',
        hoursWorked: 80,
        perHour: 54
       },
       {
        id: employeeId(),
        name: 'Becky Bottoms',
        hoursWorked: 74,
        perHour: 18
       },
       {
        id: employeeId(),
        name: 'Susie Q',
        hoursWorked: 68,
        perHour: 20
       },
       {
        id: employeeId(),
        name: 'Ray Lewis',
        hoursWorked: 78,
        perHour: 30
       },
       {
        id: employeeId(),
        name: 'Johnny Cage',
        hoursWorked: 80,
        perHour: 54
       },
       {
        id: employeeId(),
        name: 'Becky Bottoms',
        hoursWorked: 74,
        perHour: 18
       },
       {
        id: employeeId(),
        name: 'Susie Q',
        hoursWorked: 68,
        perHour: 20
       },
       {
        id: employeeId(),
        name: 'Ray Lewis',
        hoursWorked: 78,
        perHour: 30
       },
       {
        id: employeeId(),
        name: 'Johnny Cage',
        hoursWorked: 80,
        perHour: 54
       },
       {
        id: employeeId(),
        name: 'Becky Bottoms',
        hoursWorked: 74,
        perHour: 18
       },
       {
        id: employeeId(),
        name: 'Susie Q',
        hoursWorked: 68,
        perHour: 20
       },
       {
        id: employeeId(),
        name: 'Ray Lewis',
        hoursWorked: 78,
        perHour: 30
       },
       {
        id: employeeId(),
        name: 'Johnny Cage',
        hoursWorked: 80,
        perHour: 54
       },
       {
        id: employeeId(),
        name: 'Becky Bottoms',
        hoursWorked: 74,
        perHour: 18
       },
       {
        id: employeeId(),
        name: 'Susie Q',
        hoursWorked: 68,
        perHour: 20
       },
       {
        id: employeeId(),
        name: 'Ray Lewis',
        hoursWorked: 78,
        perHour: 30
       }
    ]
 
 
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
        {employeeData.map((employee) => (
          <tr>
            <th >{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.hoursWorked} Hours</td>
            <td>${employee.perHour}</td>
          </tr>
        ))}
        </tbody>
   </table>
    
       </div>
    );
  };
  
  export default Payrollsheet;