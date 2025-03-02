/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */

import NavigationItem from "../models/NavigationItem.js";
import Page from "../models/Page.js";
import User from "../models/User.js";

/**
 * Renders the homepage with necessary data.
 */
export const home = async (req, res) => {
  // Get the menu items, user data and the homepage data from the database.
  const menuItems = await NavigationItem.query();
  const userData = await User.query().findById(1);
  const pageData = await Page.query().findOne({
    is_homepage: true,
  });

  // Render the homepage with the necessary data.
  res.render("pages/home", {
    ...pageData,
    userData,
    menuItems,
  });
};

/**
 * Renders an informational page with necessary data.
 * (Pages such as "About Us", "Contact", etc.)
 */
export const page = async (req, res) => {
  const menuItems = await NavigationItem.query();
  const pageData = await Page.query().findOne({
    slug: req.params.slug,
  });

  // If the page does not exist, render a 404 page.
  if (!pageData) {
    res.status(404).send("Page not found.");
    return;
  }

  // Render the page with the necessary data.
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};

// These actions are not needed anymore, because we have a dynamic page route
// that will render any page with the correct slug.

/*
export const about = async (req, res) => {
  const menuItems = await NavigationItem.query();

  const pageData = await Page.query().findOne({
    slug: "about-us"
  });

  // const pageData = {
  //   title: "About Us",
  //   content: `
  //     <p>We are a small company that does great things!</p>
  //     <p>If you would like to drink the best coffee in the world, you are in the right place.</p>
  //     <p>Our coffee is made from the best beans in the world and is prepared by the best baristas.</p>
  //   `,
  // };
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};

export const contact = async (req, res) => {
  const menuItems = await NavigationItem.query();
  const pageData = await Page.query().findOne({
    slug: "contact"
  });


  // const pageData = {
  //   title: "Contact",
  //   content: `
  //     <p>Feel free to contact us at:</p>
  //     <p>Phone: 123-456-7890</p>
  //     <p>Email:
  //       <a href="mailto:example@example.com">john@doe.be</a>
  //     </p>
  //     <p>And some advice: "Don't drink and code!"</p>
  //   `,
  // };
  res.render("pages/default", {
    ...pageData,
    menuItems,
  });
};
*/
