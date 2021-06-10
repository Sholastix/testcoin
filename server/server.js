require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// const { Alert } = require('./models/Alert');
// const { Notification } = require('./models/Notification');
// const { User } = require('./models/User');

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