const tableName = "pages";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug");
    table.boolean("is_homepage").defaultTo(0);
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
