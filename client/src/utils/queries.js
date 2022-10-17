import { gql } from '@apollo/client';






export const QUERY_EMPLOYEE_PAYROLLPAGE = gql`
query Employees {
  employees {
    name
    _id
    hoursWorked
    payRate
  }
}`;