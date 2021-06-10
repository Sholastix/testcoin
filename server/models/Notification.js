const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
    {
        alertId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Alert',
        },

        message: {
            type: String,
        },
    },

    {
        versionKey: false,
        timestamps: { createdAt: 'triggeredAt' },
    },
);

module.exports.Notification = mongoose.model('Notification', NotificationSchema);