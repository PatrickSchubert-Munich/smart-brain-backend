// Import modules
import express from "express";
import bcrypt from "bcrypt-node";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();
import { handleRegister } from "./controllers/register.js";
import { handleProfile } from "./controllers/profile.js";
import { handleImage } from "./controllers/image.js";
import { handleSignin } from "./controllers/signin.js";
import { handleClarifaiApi } from "./controllers/clarifai_api.js";

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
  handleSignin(req, res, bcrypt, db);
});

app.post("/register", (req, res) => {
  handleRegister(req, res, bcrypt, db);
});

app.get("/profile/:id", (req, res) => {
  handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  handleImage(req, res, db);
});

app.post("/api/clarifai", (req, res) => {
  const { input } = req.body;
  handleClarifaiApi(req, res, input);
});

// Listen on Port: HTTP_PORT
app.listen(HTTP_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on port: ${HTTP_PORT}`);
});
