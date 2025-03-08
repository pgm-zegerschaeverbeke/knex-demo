const tableName = "course_user";
 
export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.integer("course_id").notNullable();
    // declare foreign key
    table.foreign("user_id").references("users.id");
    table.foreign("course_id").references("courses.id");
  });
}
 
export function down(knex) {
  return knex.schema.dropTable(tableName);
}