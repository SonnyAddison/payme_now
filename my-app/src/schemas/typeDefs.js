import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Employee {
        _id: ID
        fullName: String
        address: String
        city: String
        state: String
        zip: Number
        hourlyPay: Number
        hoursWorked: Number
        maritalStatus: String
        stateTax: Number



    type Query {
        allEmployees: [Employee!]!
        employeeById: [employeeId: ID!]: Employee
    }
    }
`

export default typeDefs;