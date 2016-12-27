
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders',(table) => {
    table.increments();
    table.integer('total').notNullable().defaultTo(0);
    table.integer('subTotal').notNullable().defaultTo(0);
    table.integer('itemQuantity').notNullable().defaultTo(0);
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
