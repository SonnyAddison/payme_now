import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
mutation Mutation($companyId: ID!, $employee: ID!) {
  addEmployee(companyId: $companyId, employee: $employee) {
    _id
    name
    employees {
      _id
      name
      address
      phone
      email
      federalTaxRate
      stateTaxRate
      hoursWorked
      payRate
      grossPay
      netPay
      federalTaxWithheld
      stateTaxWithheld
      socialSecurityTaxWithheld
      medicareTaxWithheld
    }
  }
}
`;

export const ADD_PROFILE = gql`
mutation Mutation($name: String!, $email: String!, $password: String!) {
  addProfile(name: $name, email: $email, password: $password) {
    token
    profile {
      _id
      email
      password
    }
  }
}`;

export const LOGIN_PROFILE = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      email
      password
    }
  }
}
`;

export const REMOVE_EMPLOYEE = gql`
mutation Mutation($employee: ID!) {
  removeEmployee(employee: $employee) {
    employees {
      _id
      name
      termination
    }
  }
}
`;