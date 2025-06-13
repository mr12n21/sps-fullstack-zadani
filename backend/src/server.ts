import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
export default app;
