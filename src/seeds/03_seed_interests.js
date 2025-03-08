const tableName = "interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { id: 1, name: "Lock picking" },
    { id: 2, name: "Geocaching" },
    { id: 3, name: "Competitive dog grooming" },
    { id: 4, name: "Duck herding" },
    { id: 5, name: "Extreme ironing" },
    { id: 6, name: "Soap carving" },
  ]);
};

export { seed };
