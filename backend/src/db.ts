import "reflect-metadata";
import { DataSource } from "typeorm";
import { Visitor } from "./entity/Visitor";
import { Exhibit } from "./entity/Exhibit";
import { Visit } from "./entity/Visit";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "appdb",
  synchronize: true,
  logging: false,
  entities: [Visitor, Exhibit, Visit],
});
