import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_SINGLE_PROFILE, QUERY_ME, QUERY_EMPLOYEES } from '../utils/queries';

import Auth from '../utils/auth';

const Payroll = () => {
  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const employeeData  = [useQuery(QUERY_EMPLOYEES)];





  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (!Auth.loggedIn()) {
    return <Navigate to="/home" />;
  }


  return (
    <div className='table'>
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Hours Worked</th>
        <th scope="col">Hourly Rate</th>
      </tr>
      </thead>
      <tbody>
      {employeeData.map((employee) => {
        <tr>
          <td>{employee.name}</td>
          <td>{employee.hoursWorked}</td>
          <td>{employee.perHour}</td>
        </tr>
      })}
      </tbody>
    </div>
  );
};

export default Profile;
