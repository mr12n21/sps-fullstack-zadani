import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Exhibit } from "./entity/Exhibit";
import { Visitor } from "./entity/Visitor";
import { Visit } from "./entity/Visit";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "appdb",
  synchronize: true,
  logging: false,
  entities: [User, Exhibit, Visitor, Visit],
  migrations: [],
  subscribers: [],
});
