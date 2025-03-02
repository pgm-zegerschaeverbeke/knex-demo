const tableName = "pages";
 
const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    { title: "Home", slug: "/", is_homepage: true, content: "<p>Home content</p>" },
    { title: "About", slug: "about-us", is_homepage: false, content: "<p>About content</p>" },
    { title: "Contact", slug: "contact", is_homepage: false, content: "<p>Contact content</p>" },
  ]);
};
 
export { seed };