
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orderItems',(table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('isbn').notNullable().defaultTo('Non-Scanned item');
    table.integer('price').notNullable().defaultTo(0);
    table.integer('order_id').references('id').inTable('orders').onDelete('CASCADE').index();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orderItems');
};
