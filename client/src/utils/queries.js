import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
query myProfile {
  me {
    _id
    name
    email
    password
    company
  }
}
`;

export const QUERY_ALLPROFILES = gql`
    query allProfile {
      profiles {
        _id
        name
        email
        company {
        name
      }
    }
  }
`;

export const QUERY_EMPLOYEE = gql`
    query employee($employeeId: ID!) {
      employee {
        _id
        name
        address
        phone
        email
        federalTaxRate
        stateTaxRate
        hoursWorked
        payRate
      }
    }
`;

export const QUERY_ALLEMPLOYEES = gql`
    
    query Employees {
      employee { 
        _id
        name
        address
        phone
        email
        federalTaxRate
        stateTaxRate
        hoursWorked
        payRate
      }
    }
`;

export const QUERY_COMPANIES = gql`

  query Companies {
    companies {
      _id
      name
      address
      taxId
    }
  }`;

export const QUERY_COMPANY = gql`

  query Companies($companyId: ID!) {
    company(companyId: $companyId) {
      _id
      name
      address
      taxId
      employees {
        _id
        name
      }
    }
  }`;



