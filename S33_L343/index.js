import express from "express";
const app = express();
const port = 8085;

app.get("/", (req, res) => {
  res.send("Homepage!!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
