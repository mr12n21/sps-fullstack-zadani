import "reflect-metadata";
import { DataSource } from "typeorm";
import { Visitor } from "./entity/Visitor";
import { Exhibit } from "./entity/Exhibit";
import { Visit } from "./entity/Visit";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "museum",
  synchronize: true,
  logging: false,
  entities: [Visitor, Exhibit, Visit],
});
