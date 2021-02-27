
exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('author').notNullable();
    table.integer('pages').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back books');
  return knex.schema.dropTable('books');
};
