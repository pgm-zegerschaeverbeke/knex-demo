const tableName = "interest_user";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { id: 1, user_id: 1, interest_id: 1},
    { id: 2, user_id: 1, interest_id: 2},
    { id: 3, user_id: 2, interest_id: 3},
  ]);
};

export { seed };
