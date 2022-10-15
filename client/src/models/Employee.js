const { Schema, model } = require('mongoose');


const addEmployeeSchema = new Schema (
    {   
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: Number,
        },
        hourlyPay: {
            type: Number,
        },
        hoursWorked: {
            type: Number,
        },
        maritalStatus: {
            type: String,
            required: true
        },
        stateTax: {
            type: Number
        },
    }
);

const Employee = model('Employee', addEmployeeSchema)

module.exports = Employee;