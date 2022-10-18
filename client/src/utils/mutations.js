import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
mutation AddEmployee($name: String, $address: String, $phone: String, $email: String, $federalTaxRate: Int, $stateTaxRate: Int, $hoursWorked: Int, $payRate: Int, $termination: String) {
  addEmployee(name: $name, address: $address, phone: $phone, email: $email, federalTaxRate: $federalTaxRate, stateTaxRate: $stateTaxRate, hoursWorked: $hoursWorked, payRate: $payRate, termination: $termination) {
    _id
    name
    address
    phone
    email
    federalTaxRate
    stateTaxRate
    hoursWorked
    payRate
    termination
  }
}
# mutation AddEmployee($name: String, $address: String, $phone: String, $email: String, $federalTaxRate: Int, $stateTaxRate: Int, $hoursWorked: Int, $payRate: Int, $grossPay: Int, $netPay: Int, $federalTaxWithheld: Int, $stateTaxWithheld: Int, $socialSecurityTaxWithheld: Int, $medicareTaxWithheld: Int, $termination: String) {
#   addEmployee(name: $name, address: $address, phone: $phone, email: $email, federalTaxRate: $federalTaxRate, stateTaxRate: $stateTaxRate, hoursWorked: $hoursWorked, payRate: $payRate, grossPay: $grossPay, netPay: $netPay, federalTaxWithheld: $federalTaxWithheld, stateTaxWithheld: $stateTaxWithheld, socialSecurityTaxWithheld: $socialSecurityTaxWithheld, medicareTaxWithheld: $medicareTaxWithheld, termination: $termination) {
#     _id
#     fullName
#     address
#     phone
#     email
#     federalTaxRate
#     stateTaxRate
#     hoursWorked
#     payRate
#     # grossPay
#     # netPay
#     # federalTaxWithheld
#     # stateTaxWithheld
#     # socialSecurityTaxWithheld
#     # medicareTaxWithheld
#     termination
#   }
# }`;

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