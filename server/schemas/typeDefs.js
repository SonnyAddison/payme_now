const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    company: [Company]!
  }

  type Company {
    _id: ID!
    name: String
    address: String
    taxId: String
    employees: [Employee]!
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
    companies: [Company]!
    company(companyId: ID!): Company
    employee(employeeId: ID!): Employee
    employees: [Employee]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeEmployee(employeeId: ID!, name: String!): Employee
    addEmployee(name: String!, address: String!, phone: String!, email: String!, federalTaxRate: Number, stateTaxRate: Number, payRate: Number ): Employee
    addCompany(profileId: ID!, company: ID!): Profile
    removeProfile: Profile
    removeCompany(company: ID!): Profile
  }
`;

module.exports = typeDefs;
