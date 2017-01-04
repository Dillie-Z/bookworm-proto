
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trades',(table) => {
    table.increments();
    table.string('firstName').notNullable().defaultTo('');
    table.string('lastName').notNullable().defaultTo('');
    table.integer('total').notNullable().defaultTo(0);    table.integer('itemQuantity').notNullable().defaultTo(0);
    table.integer('customer_id').references('id').inTable('customers').onDelete('CASCADE').index();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trades');
};
