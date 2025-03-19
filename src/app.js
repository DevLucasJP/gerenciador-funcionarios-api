import express from "express";
import router from "./routers/index.js";
import dbConncetion from "./db/index.js";
import logger from "morgan";

const app = express();
app.use(logger("dev"));
dbConncetion();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(router);

export default app;