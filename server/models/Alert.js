const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
    {
        coin_id: {
            type: String,
            trim: true,
            required: true,
        },

        currency_id: {
            type: String,
            trim: true,
            required: true,
        },

        value: {
            type: Number,
            trim: true,
            required: true,
        },
    },

    {
        versionKey: false,
        timestamps: { createdAt: true },
    },
);

module.exports.Alert = mongoose.model('Alert', AlertSchema);