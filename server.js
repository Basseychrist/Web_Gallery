/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
require("dotenv").config(); //
const cookieParser = require("cookie-parser");
const session = require("express-session");
const pool = require("./database/");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const baseController = require("./controllers/baseController");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const { sequelize } = require("./models");
const utilities = require("./utilities");
const path = require("path");
const db = require("./database/index"); // Adjust path if needed

/* ***********************
 * App Initialization
 * Values from .env (environment) file
 *************************/
const app = express();
const port = process.env.PORT;
const host = process.env.DB_HOST;

/* ***********************
 * Middleware
 * ************************/
app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      createTableIfMissing: true,
      pool,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    name: "sessionId",
  })
);

app.use(flash());

app.use(cookieParser());
app.use(utilities.checkJWTToken);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ***********************
 * Set Locals for Views
 *************************/
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.isAuthenticated = req.session.userId ? true : false;
  next();
});

/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root

/* ***********************
 * Static Files
 *************************/
app.use(express.static(path.join(__dirname, "public")));

/* ***********************
 * Routes
 *************************/
const indexRoute = require("./routes/index");
const accountRoute = require("./routes/accountRoute");
const errorRoute = require("./routes/errorRoute"); // or similar

app.use("/", indexRoute);
// Account routes
app.use("/account", accountRoute);
app.use("/error", errorRoute);
/* ***********************
 * File Not Found Route
 * - must be last route in list
 *************************/
app.use((req, res, next) => {
  next({ status: 404, message: "Sorry, we appear to have lost that page." });
});

/* ***********************
 * Express Error Handler
 * Place after all other middleware
 *************************/
app.use(async (err, req, res, next) => {
  let nav = (await utilities.getNav) ? await utilities.getNav() : "";
  console.error(`Error at: "${req.originalUrl}": ${err.message}`);
  res.status(err.status || 500).render("errors/error", {
    title: err.status || "Server Error",
    message: err.message,
    notice: req.flash("notice"),
    error: process.env.NODE_ENV === "development" ? err : {},
    nav,
  });
});

/* ***********************
 * Database Synchronization and Server Start
 *************************/

// Example test query on startup
db.query("SELECT 1 AS connected")
  .then((res) => {
    if (res.rows && res.rows.length > 0) {
      console.log("Database connected:", res.rows[0]);
    } else {
      console.log("Database connection test returned no rows.");
    }
  })
  .catch((err) => console.error("Database connection error:", err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
