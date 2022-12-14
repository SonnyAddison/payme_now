const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    company: String
    employee: [Employee]!
  }
  
  type Employee {
    _id: ID
    name: String
    address: String
    phone: String
    email: String
    federalTaxRate: Int
    stateTaxRate: Int
    hoursWorked: Int
    payRate: Int
    grossPay: Int
    netPay: Int
    federalTaxWithheld: Int
    stateTaxWithheld: Int
    socialSecurityTaxWithheld: Int
    medicareTaxWithheld: Int
    termination: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }


  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    employee(employeeId: ID!): Employee
    employees: [Employee]!
  }



  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth    
    addEmployee (
                    name: String,
                    address: String,
                    phone: String,
                    email: String,
                    federalTaxRate: Int,
                    stateTaxRate: Int,
                    hoursWorked: Int,
                    payRate: Int,
                    # grossPay: Int
                    # netPay: Int
                    # federalTaxWithheld: Int
                    # stateTaxWithheld: Int             
                    # socialSecurityTaxWithheld: Int
                    # medicareTaxWithheld: Int
                    termination: String): Employee
    removeProfile: Profile   
    removeEmployee(employee: ID!): Profile
  }
`;

module.exports = typeDefs;