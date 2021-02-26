
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.date('time').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back incidents');
  return knex.schema.dropTable('incidents');
};
