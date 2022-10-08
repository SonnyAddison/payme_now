// noted out
import { gql } from '@apollo/client';

export const QUERY_EMPLOYEES = gql`
  query allEmployees {
    employees {
      _id
      name
      hoursWorked
      payRate
    }
  }
`;