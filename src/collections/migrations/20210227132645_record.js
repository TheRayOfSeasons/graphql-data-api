
exports.up = function(knex) {
  return knex.schema.createTable('records', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('content').notNullable();
    table.integer('version').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back records');
  return knex.schema.dropTable('records');
};
