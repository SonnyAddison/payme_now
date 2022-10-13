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
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    federalTaxRate: {
        type: int,
        required: true,
        unique: false,
        trim: true,
    },
    stateTaxRate: {
        type: int,
        required: true,
        unique: false,
        trim: true,
    },
    hoursWorked: {
        type: int,
        required: true,
        unique: false,
        trim: true,
    },
    payRate: {
        type: int,
        required: true,
        unique: false,
        trim: true,
    },
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;

