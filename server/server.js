require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const request = require('request');

const app = express();

app.use(express.json());

const { Alert } = require('./models/Alert');
const { Notification } = require('./models/Notification');
const { User } = require('./models/User');

require('./seed/seeder')();

const data = async () => {
    const alerts = await Alert.find();
    alerts.forEach((alert) => {
        request({
            // url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth',
            url: `https://api.coingecko.com/api/v3/simple/price?ids=${alert.coinId}&vs_currencies=${alert.currencyId}`,
            json: true,
        }, (error, response, body) => {
            let price = body[alert.coinId][alert.currencyId];
            if (price > alert.value || price < alert.value) {
                let message = `The price is ${price > alert.value ? 'GT' : 'LT'} then alert value`;
                console.log(message);
                let notification = new Notification({
                    alertId: alert.id,
                    message: message,
                });

                notification.save();
            }
        });
    });
};

data();

(async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(process.env.APP_PORT, () => {
            console.log(`Server listening on port ${process.env.APP_PORT}.`);
        });
    } catch (err) {
        console.error(`Connection failed: ${process.env.DB_CONNECT}`, err);
    };
})();