import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
import env from "dotenv";
env.config();

const app: Application = express();

app.use(express.json());
app.use(cors());
mainApp(app);

app.listen(parseInt(process.env.PORT as string), () => {
  dbConfig();
});
