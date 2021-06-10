const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },

        password: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },

        firstName: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },

        lastName: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
    },

    {
        versionKey: false,
        timestamps: { createdAt: true, updatedAt: true },
    },
);

module.exports.User = mongoose.model('User', UserSchema);