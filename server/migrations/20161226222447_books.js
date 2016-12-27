exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('subtitle').notNullable().defaultTo('');
    table.string('author').notNullable().defaultTo('');
    table.string('publisher').notNullable().defaultTo('');
    table.string('publishedDate').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.integer('retailPrice').notNullable().defaultTo(0);
    table.integer('storePrice').notNullable().defaultTo(0);
    table.integer('tradeInPrice').notNullable().defaultTo(0);
    table.string('genre').notNullable().defaultTo('');
    table.integer('quantity').notNullable().defaultTo(0);
    table.string('scannedISBN').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
