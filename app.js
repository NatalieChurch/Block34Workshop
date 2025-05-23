import express from "express";
const app = express();
import employeesRouter from "./api/employees.js"
import db from "#db/client";


app.use(express.json());

app.use("/", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});

export default app;