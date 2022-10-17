import { gql } from '@apollo/client';





export const QUERY_PROFILE = gql`
query myProfile {
        me {
          _id
          name
          email
          password
          company: [Company]!
        }
      }
`;

export const QUERY_ALLPROFILES = gql`
    query allProfiles {
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
    query Employee($employeeId: ID!) {
    employee(employeeId: $employeeId) {
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
    
  profile(profileId: $profileId) {
    company {
      employees {
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
  }
}
`;