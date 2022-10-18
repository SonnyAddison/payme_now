const { AuthenticationError } = require('apollo-server-express');
const { Profile, Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('company');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // // company: async (parent, { companyId }) => {
    //   return Company.findOne({ _id: companyId }).populate('employees');
    // },
    // companies: async () => {
    //   return Company.find();
    // },
    employee: async (parent, { employeeId }) => {
      return Employee.findOne({ _id: employeeId });
    },
    employees: async () => {
      return Employee.find({})
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },


    // Add an employee to a profile
    addEmployee: async (parent, { 
                                  name,
                                  address,
                                  phone,
                                  email,
                                  federalTaxRate,
                                  stateTaxRate,
                                  hoursWorked,
                                  payRate,
                                  // grossPay,
                                  // netPay,
                                  // federalTaxWithheld,
                                  // stateTaxWithheld,           
                                  // socialSecurityTaxWithheld,
                                  // medicareTaxWithheld,
                                  termination, 
                                }
                                ) => {
      
        return newEmployee = await Employee.create({name,
          address,
          phone,
          email,
          federalTaxRate,
          stateTaxRate,
          hoursWorked,
          payRate,
          // grossPay,
          // netPay,
          // federalTaxWithheld,
          // stateTaxWithheld,           
          // socialSecurityTaxWithheld,
          // medicareTaxWithheld,
          termination});

          
      },
      
   
    // Remove an employee from a profile
    removeEmployee: async (parent, { employeeId }, context) => {
      if (context.user) {
        return Employee.findOneAndDelete({ _id: employeeId });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    // removeCompany: async (parent, { company }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { company: company } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
