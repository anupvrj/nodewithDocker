const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).render("./pages/index.ejs");
});

router.post("/submit-details", (req, res) => {
  console.log(req.body.name);

  res.render("./pages/thankyou.ejs", {
    userDetails: { name: req.body.name, email: req.body.email },
  });
});

// router.get("/thankyou", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const userDetails = {
//     name: name,
//     email: email,
//   };
//   res.status(200).render("./pages/thankyou.ejs", userDetails);
// });
module.exports = router;
