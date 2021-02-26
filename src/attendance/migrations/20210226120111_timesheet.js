
exports.up = function(knex) {
  return knex.schema.createTable('timesheet', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.date('time').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back timesheet');
  return knex.schema.dropTable('timesheet');
};
