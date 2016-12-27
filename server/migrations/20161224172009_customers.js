
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', (table) => {
    table.increments();
    table.string('firstName').notNullable().defaultTo('');
    table.string('lastName').notNullable().defaultTo('');
    table.string('phoneNumber').notNullable().defaultTo('');
    table.integer('accountBalance').notNullable().defaultTo(0);
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
