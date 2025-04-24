// Import modules
const express = require("express");
const bcrypt = require("bcrypt-node");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();
const register = require("./controllers/register.js");
const profile = require("./controllers/profile.js");
const image = require("./controllers/image.js");
const signin = require("./controllers/signin.js");
const clarifai_api = require("./controllers/clarifai_api.js");

// DB Connection (with library knex)
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// Create express app
const app = express();

// HTTP_PORT number
const HTTP_PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // new body-parser
app.use(cors()); // Allow cross-origin requests

// REST API Routes
app.get("/", (req, res) => {
  res.send(db.users);
});

app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, bcrypt, db);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, bcrypt, db);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/api/clarifai", (req, res) => {
  const { input } = req.body;
  clarifai_api.handleClarifaiApi(req, res, input);
});

// Listen on Port: HTTP_PORT
app.listen(HTTP_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on port: ${HTTP_PORT}`);
});
