const jwt = require("jsonwebtoken");
require("dotenv").config();
const { body, validationResult } = require("express-validator");
const Util = {};

/* ****************************************
 * Middleware to check token validity
 **************************************** */
Util.checkJWTToken = (req, res, next) => {
  if (req.cookies.jwt) {
    jwt.verify(
      req.cookies.jwt,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
        if (err) {
          req.flash("Please log in");
          res.clearCookie("jwt");
          return res.redirect("/account/login");
        }
        res.locals.accountData = accountData;
        res.locals.loggedin = 1;
        next();
      }
    );
  } else {
    next();
  }
};

/* ****************************************
 *  Check Login
 * ************************************ */
Util.checkLogin = (req, res, next) => {
  if (res.locals.loggedin) {
    next();
  } else {
    req.flash("notice", "Please log in.");
    return res.redirect("/account/login");
  }
};

/* ****************************************
 *  getNav function
 * ************************************ */
Util.getNav = (user) => {
  if (user) {
    return `
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard/pictures">Pictures</a></li>
        <li><a href="/dashboard/documents">Documents</a></li>
        <li><a href="/dashboard/passwords">Passwords</a></li>
        <li><a href="/dashboard/events">Events</a></li>
        <li><a href="/account/logout">Logout</a></li>
      </ul>
    `;
  } else {
    return `
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/account/login">Login</a></li>
        <li><a href="/account/register">Sign Up</a></li>
      </ul>
    `;
  }
};

function handleErrors(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = {
  handleErrors,
  checkLogin: Util.checkLogin,
  checkJWTToken: Util.checkJWTToken,
  getNav: Util.getNav, // <-- Add this line
};
