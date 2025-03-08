const tableName = "users";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      firstname: "John",
      lastname: "Doe",
      bio: "I am a web developer.",
    },
    {
      firstname: "Jane",
      lastname: "Doe",
      bio: "I am a web designer.",
    },
    {
      firstname: "Alice",
      lastname: "Smith",
      bio: "I am a software engineer.",
    },
    {
      firstname: "Bob",
      lastname: "Smith",
      bio: "I am a data analyst",
    },
  ]);
};

export { seed };
