
exports.up = function(knex, Promise) {
  return knex.schema.createTable('isbns',(table)=>{
    table.increments();
    table.string('isbn').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('isbns');
};
