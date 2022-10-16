import { Employee } from '../models'

const resolvers = {
    Query: {
        allEmployees: async () => {
            return await Employee.find({})
        },
        employeeById: async (parent, { employeeId }) => {
            return Employee.findOne({ _id: employeeId });
          },
    },

    Mutation: {
        
    }
};


module.exports = resolvers;