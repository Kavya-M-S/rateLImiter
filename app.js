const express = require("express");
const rateLimit = require("express-rate-limit");

var app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: "Too many request from this IP",
});

app.get("/", limiter, (req, res) => res.send("Hello Word..!!"));

const port = 4000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
module.exports = app;
