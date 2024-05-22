const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/section/:searchterm", (req, res) => {
  let searchterm = req.params.searchterm || "";
  res.send(searchterm);
});

app.get("/section/:searchterm/:itemid", (req, res) => {
  let { searchterm, itemid } = req.params;
  res.send(`<h1>${searchterm}</h1><p>${itemid}<p/>`);
});

app.get("/cats", (req, res) => {
  res.send("Cats are cool!");
});

app.get("/dogs", (req, res) => {
  res.send("Dogs are cool!");
});

app.get("/jsontest", (req, res) => {
  let responseObject = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["Sports", "Cooking", "Coding"],
  };
});

app.post("/newCat", (req, res) => {
  res.send("New cat added!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
