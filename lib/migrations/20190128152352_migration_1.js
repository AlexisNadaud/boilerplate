
exports.up = function(knex, Promise) {
    //Create table if not exists
    knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            return knex.schema.withSchema('public').createTable('users', function (table) {
                table.increments('id').primary();
                table.string('login');
                table.string('password');
                table.string('email').unique();
                table.string('firstname');
                table.string('lastname');
                table.string('company');
                table.string('function');
            });
        }
    });

    //Insert first user if table 'users' exists
    knex.schema.hasTable('users').then(function(exists) {
        if (exists) {
            knex
            .insert({
                id: 0,
                login: 'vlagarde',
                password: 'pwd',
                email: 'vlag@mail.com',
                firstname: 'Vincent',
                lastname: 'Lagarde',
                company: 'Terasoft',
                function: 'Développeur'
            })
            .into('users')
            .then(() => console.log('data inserted !'))
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                knex.destroy();
            });
        }
    });
    

};

exports.down = function(knex, Promise) {
    //Delete table if exists
    knex.schema.hasTable('users').then(function(exists) {
        if (exists) {
            return knex.schema.dropTable('users');
        }
    });
};
