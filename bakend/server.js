const logger = require("morgan");
const articles = require("./routes/article");
const players = require("./routes/players");
const clubs = require("./routes/club");
const users = require("./routes/users");
const news = require("./routes/news");
const bodyParser = require("body-parser");
const express = require("express");
const connectDB = require("./config/db");
const validateUser = require("./middleware/auth");
const path = require("path");

const app = express();
app.use(express.static('public'));

// Connect Database
connectDB();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// // Init Middleware
// app.use(express.json({ extended: false }));

// Define Routes
// app.get("/", function(req, res) {
//   res.json({ tutorial: "Build REST API with node.js" });
// });

// public route
app.use("/api/users",users);

// private route
app.use("/api/articles", articles);
app.use("/api/players", players);
app.use("/api/clubs", clubs);
app.use("/api/news", news);

app.get("/favicon.ico", function(req, res) {
  res.sendStatus(204);
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// express doesn't consider not found 404 as an error so we need to handle 404 it explicitly
// handle 404 error
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle errors
app.use(function(err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something looks wrong :( !!!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
