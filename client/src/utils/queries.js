import { gql } from '@apollo/client';





export const QUERY_EMPLOYEE_PAYROLLPAGE = gql`
query allEmployees {
  employees {
    hoursWorked
    name
    _id
    payRate
  }
}`;