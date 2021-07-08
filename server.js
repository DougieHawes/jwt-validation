require("dotenv").config();

// dependency imports
const express = require("express");
const mongoose = require("mongoose");

// environment variables
const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

// initiate express app
const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, console.log(`express app running on port:${port}`))
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/welcome", (req, res) => res.render("welcome"));
