const express = require("express");
const app = express();
const router = require("./routers/router");
const path = require("path");
var bodyParser = require("body-parser");

//ejs template configuration

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", router);

app.listen(3035, (req, res) => {
  console.log("listening on port 3035");
});
