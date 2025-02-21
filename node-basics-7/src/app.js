const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  const person = {
    name: "Jesus",
    age: 33,
    city: "Jerusalem",
  };
  res.status(200).json(person);
});

app.get("/details", (req, res, next) => {
  const details = {
    city: "Israel",
    family: "David",
  };
  res.status(200).json(details);
});

module.exports = app;
