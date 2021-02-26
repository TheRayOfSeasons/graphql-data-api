
exports.up = function(knex) {
  return knex.schema.createTable('timerecord', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('some').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back timerecord');
  return knex.schema.dropTable('timerecord');
};
