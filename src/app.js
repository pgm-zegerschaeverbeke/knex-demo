// ---------------------- Import modules ----------------------
import express from "express";
import expressLayouts from "express-ejs-layouts";
import { PORT, VIEWS_PATH } from "./consts.js";
import * as PageController from "./controllers/PageController.js";
import * as API_InterestController from "./controllers/api/InterestController.js";
import * as API_UserController from "./controllers/api/UserController.js";
import helpers from "./lib/TemplateHelpers.js";

// ---------------------- App configuration ----------------------

const app = express(); // create an instance of express
app.use(express.static("public")); // serve static files from the public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------- EJS configuration ----------------------
// EJS is a templating engine that allows you to embed JavaScript in your HTML.
// It is used to generate HTML with plain JS, with templates that can
// be reused throughout your application.
app.use(expressLayouts); // use express-ejs-layouts to support layouts
app.set("view engine", "ejs"); // use EJS as the view engine
app.set("layout", "layouts/main"); // default layout file
app.set("views", VIEWS_PATH); // location of the ejs files
Object.assign(app.locals, helpers); // make the helpers available to all views

// ---------------------- API routes ----------------------
// API routes for data that will be consumed by a client, the frontend, ...
// These routes will return JSON data.

// Interest API routes
app.get("/api/interests", API_InterestController.index);
app.get("/api/interests/:id", API_InterestController.show);
app.post("/api/interests", API_InterestController.store);
app.put("/api/interests/:id", API_InterestController.update);
app.delete("/api/interests/:id", API_InterestController.destroy);

// User API routes
app.get("/api/users", API_UserController.index);
app.get("/api/users/:id", API_UserController.show);
app.post("/api/users", API_UserController.store);
app.put("/api/users/:id", API_UserController.update);
app.delete("/api/users/:id", API_UserController.destroy);

// Catch non-existing API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({ message: "API route not found." });
});

// ---------------------- App routes ----------------------
// App routes for pages that will be rendered in the browser.
// These routes will return HTML data.

app.get("/", PageController.home);
// these routes are commented out because they are not needed anymore
// app.get("/about-us", PageController.about);
// app.get("/contact", PageController.contact);
app.get("/:slug", PageController.page);

// 404 page
app.get("*", (req, res) => {
  res.status(404).send("Page not found.");
});

// ---------------------- Error handling ----------------------
// When an error occurs in the app, the error handling middleware will be called.

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Something went wrong.");
});

// ---------------------- Start the app ----------------------
// Start the app and listen on the defined port.
app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}/.`);
});
