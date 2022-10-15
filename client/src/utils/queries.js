// noted out
import { gql } from '@apollo/client';

export const QUERY_FOR_PAYROLL = gql`
  query allEmployees {
    employees {
      _id
      name
      hoursWorked
      payRate
    }
  }
  query employee {
    employee(employeeId: ID!): Employee
  }
`;