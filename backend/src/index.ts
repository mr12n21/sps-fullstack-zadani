import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./db";

dotenv.config();
const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to DB");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
