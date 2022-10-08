import React from "react";






const Payroll = () => {
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
       }
    ]
  
  
  
    // // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
    // if (!Auth.loggedIn()) {
    //   return <Navigate to="/home" />;
    // }
  
  
    return (
    <div className="container">
    
    <h2>Payroll</h2>
    
      <div>
        
      <div className='table table-striped' id="table">
        <thead>
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
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.hoursWorked} Hours</td>
            <td>${employee.perHour}</td>
          </tr>
        ))}
        </tbody>
      </div>
      </div>
      </div>
    );
  };
  
  export default Payroll;