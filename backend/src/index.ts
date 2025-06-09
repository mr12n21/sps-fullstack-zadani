import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./db";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Connected to database");

    app.listen(3000, () => {
      console.log("🚀 Server running on http://localhost:3000");
    });
  })
  .catch((error) => console.error("❌ DB connection error:", error));
