const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    messages: {}, // or your flash messages object
    nav: {
      home: true,
      about: false,
      contact: false
    }
  });
});

module.exports = router;
