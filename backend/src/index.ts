import "reflect-metadata";

import * as express from "express";
import AppDataSource from "./data-source";
import TodoRoutes from "./routes/TodoRoutes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/todos", TodoRoutes);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
