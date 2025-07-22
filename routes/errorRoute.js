const express = require("express");
const router = express.Router();
// const errorController = require("../controllers/errorController");

// router.get("/trigger-error", errorController.triggerError);

// Example error route (optional)
router.get("/", (req, res) => {
  res.render("errors/error", {
    title: "Error",
    message: "An error occurred.",
    nav: {},
  });
});
module.exports = router;