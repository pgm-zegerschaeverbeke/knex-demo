const tableName = "navigation_items";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      label: "Home",
      target: "_self",
      url: "/",
    },
    {
      label: "About Us",
      target: "_self",
      url: "/about-us",
    },
    {
      label: "Contact",
      target: "_self",
      url: "/contact",
    },
    {
      label: "Optical Toys",
      target: "_self",
      url: "https://optical.toys/",
    },
  ]);
};

export { seed };
