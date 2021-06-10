const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
    {
        alert_id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Alert',
        }]
    },

    {
        versionKey: false,
        timestamps: { createdAt: 'triggeredAt' },
    },
);

module.exports.Notification = mongoose.model('Notification', NotificationSchema);