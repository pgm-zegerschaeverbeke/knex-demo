const tableName = "interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { name: "Lock picking" },
    { name: "Geocaching" },
    { name: "Competitive dog grooming" },
    { name: "Duck herding" },
    { name: "Extreme ironing" },
    { name: "Soap carving" },
  ]);
};

export { seed };
