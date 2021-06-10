const { User } = require('../models/User');

module.exports = async () => {
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
    
    for (let i = 0; i < users.length; i++) {
        users[i].save();
    };
};