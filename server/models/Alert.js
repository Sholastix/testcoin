const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
    {
        coinId: {
            type: String,
            trim: true,
            required: true,
        },

        currencyId: {
            type: String,
            trim: true,
            required: true,
        },

        value: {
            type: Number,
            trim: true,
            required: true,
        },

        owner: {
            type: String,
        },

        // owner: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        // },
    },

    {
        versionKey: false,
        timestamps: { createdAt: true },
    },
);

module.exports.Alert = mongoose.model('Alert', AlertSchema);