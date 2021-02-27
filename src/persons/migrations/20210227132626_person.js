
exports.up = function(knex) {
  return knex.schema.createTable('persons', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.date('birthday').notNullable();
  });
};

exports.down = function(knex) {
  console.log('rolling back persons');
  return knex.schema.dropTable('persons');
};
