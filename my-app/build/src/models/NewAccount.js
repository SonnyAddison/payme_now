const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const newAccountSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        }
    }
)