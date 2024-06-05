let express = require("express");
let app = express();
let session = require("express-session");

let sessionOptions = {
  secret: "not a great secret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
};

app.use(session(sessionOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/session", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this url ${req.session.views} number of times`);
  } else {
    req.session.views = 1;
    res.send(`You have visited this url ${req.session.views} number of times`);
  }
});

app.get("/register", (req, res) => {
  let user = req.query.user || "Anonymus";
  req.session.user = user;
  res.send(`Registered ${user} in session.`);
});

app.get("/greet", (req, res) => {
  let user = req.session.user;
  res.send(`Hello ${user}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
