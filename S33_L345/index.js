const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let responseObject = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["Sports", "Cooking", "Coding"],
  };
});

app.get("/cats", (req, res) => {
  res.send("Cats are cool!");
});

app.get("/dogs", (req, res) => {
  res.send("Dogs are cool!");
});

app.post("/newCat", (req, res) => {
  res.send("New cat added!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
