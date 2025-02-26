const express = require("express");
const router = require("./routers");
const dbConncetion = require("./db");

const app = express();
dbConncetion();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(router);

module.exports = app;