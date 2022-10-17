const { Schema, model } = require('mongoose');


const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    federalTaxRate: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    stateTaxRate: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    hoursWorked: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    payRate: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    termination: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    }
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;

