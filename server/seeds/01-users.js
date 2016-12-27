exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return knex('users').insert([{
                firstName: 'bob',
                lastName: 'kerbin',
                email: 'bob@kerbinmail.com',
                hashedPassword: '$2y$10$6Pbgpnj5wSTaibgLrIZOHOd08gKM9YTemhVMsZVkotWzJTeS/etDG',
                admin:'admin',
                created_at: new Date('2016-06-26 14:26:16 UTC'),
                updated_at: new Date('2016-06-26 14:26:16 UTC')
            }, {
                firstName: 'jeb',
                lastName: 'kerbin',
                email: 'jeb@kerbinmail.com',
                hashedPassword: '$2a$12$ncjOOHfp.Hd.Xd1e4/mbJenIDFct.rgczLpwIgZYvXQbbmJqgZH7O',
                created_at: new Date('2016-06-26 14:26:16 UTC'),
                updated_at: new Date('2016-06-26 14:26:16 UTC')
            }]);
        });
};
