const { Alert } = require('../models/Alert');
const { User } = require('../models/User');

module.exports = async () => {
    try {
        const users = [
            new User({
                email: 'user1@gmail.com',
                password: '123',
                firstName: 'John',
                lastName: 'Smith',
            }),

            new User({
                email: 'user2@gmail.com',
                password: '456',
                firstName: 'Terry',
                lastName: 'Pratchet',
            }),

            new User({
                email: 'user3@gmail.com',
                password: '789',
                firstName: 'Jack',
                lastName: 'Sparrow',
            }),
        ];

        let saved = [];
        for (let i = 0; i < users.length; i++) {
            users[i].save();
            saved.push(users[i]);
        };

        let alerts = [];
        for (let i = 0; i < saved.length; i++) {
            for (let j = 0; j < 3; j++) {
                let alert = new Alert({
                    coinId: 'bitcoin',
                    currencyId: 'eth',
                    value: Math.random() * (16 - 14) + 14,
                    owner: users[i]._id,
                });

                alerts.push(alert.save());
            };
        };

    } catch (err) {
        console.error(err);
    };
};