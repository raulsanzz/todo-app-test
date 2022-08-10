import "reflect-metadata";
import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "hassan123",
  database: "postgres",
  entities: [Todo],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
