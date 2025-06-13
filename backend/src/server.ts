import express from "express";
import bodyParser from "body-parser";
import exhibitsRouter from "./api/exhibits";
import visitsRouter from "./api/visits";
import path from "path";


const app = express();

// Nastavení Pug view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());

app.use("/api/exhibits", exhibitsRouter);
app.use("/api/visits", visitsRouter);

export default app;
