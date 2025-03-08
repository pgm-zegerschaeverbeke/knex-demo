const tableName = "courses";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { name: "Programmeren 3", credits: 5, id: 1 },
    { name: "Programmeren 4", credits: 6, id: 2 },
    { name: "Datamangement 2", credits: 3, id: 3 },
  ]);
};

export { seed };
