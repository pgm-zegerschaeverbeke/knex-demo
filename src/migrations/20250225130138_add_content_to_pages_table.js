const tableName = "pages";

export function up(knex) {
  return knex.schema.table(tableName, function (table) {
    table.text("content");
  });
}

export function down(knex) {
  return knex.schema.table(tableName, function (table) {
    table.dropColumn("content");
  });
}
