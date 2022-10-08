const { Schema, model } = require('mongoose');

const companySchema = new Schema({
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
    },
    taxId: {
        type: String,
        required: true,
        minlength: 9,
    },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
        },
    ],
});

const Company = model('Company', companySchema);

module.exports = Company;
