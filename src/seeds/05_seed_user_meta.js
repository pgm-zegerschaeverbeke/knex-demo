const tableName = "user_meta";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
        user_id: 1,
        quote: "Believe you can and you're halfway there",
        location: "Ghent"
    },
    {
        user_id: 2,
        quote: "It's fun to do the impossible",
        location: "New York"
    }
  ]);
};

export { seed };
