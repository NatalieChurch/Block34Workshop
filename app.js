import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js"

// TODO: this file!



// import express from "express";
// const app = express();
// export default app;
// import moviesRouter from "./api/movies.js"

// app.use(express.json());

// // Below: route /movies to movies router
// app.use("/movies", moviesRouter)

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send("Sorry! Something went wrong :(");
// });
