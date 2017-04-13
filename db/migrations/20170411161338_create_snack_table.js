exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', (table) =>{
    table.increments();
    table.string('name').notNullable();
    table.text('image_url').notNullable();
    table.text('review_description').notNullable();
    table.integer('my_rating').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks')
};
