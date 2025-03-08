const tableName = "pets";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { species: "Border collie", age: 4, name: "Laika", owner_id: 1 },
    { species: "Labrador", age: 4, name: "Laika", owner_id: 1 },
    { species: "Siamese cat", age: 9, name: "Rudy", owner_id: 2}
  ]);
};

export { seed };
