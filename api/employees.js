import express from "express";
const router = express.Router();
export default router;

// TODO: this file!

// import express from "express";
// const router = express.Router();
// export default router;
// import { createMovie, deleteMovie, getMovie, getMovies, updateMovie } from "#db/queries/movies";



// router.route("/").get(async (req, res) => {
//   const movies = await getMovies();
//   res.send(movies);
// });



// router.route("/").post(async (req, res) => {
//   if(!req.body){
//     return res.status(400).send({error: "Missing req.body"})
//   }
  
//   const {name, releaseDate, runningTime} = req.body

//   if(!name || !releaseDate || !runningTime){
//     return res.status(400).send({error: "Missing required params"})
//   }

//   const movie = await createMovie({name, releaseDate, runningTime})
  
//   res.status(201).send(movie)
// })



// router.route("/:id").get(async (req, res) => {
//   const id = req.params.id

//   if(!Number.isInteger(id) && !id >= 0){
//     return res.status(400).send({error: "Please send a valid number"})
//   }

//   const movie = await getMovie(id)
//   if(!movie){
//     return res.status(404).send({error: "ID not found"})
//   }

//   res.send(movie)
// })



// router.route("/:id").delete(async (req, res) => {
//   const id = req.params.id

//   if(!Number.isInteger(id) && id < 0){
//     return res.status(400).send({error: "Please send a valid number"})
//   }

//   const deleteM = await deleteMovie(id)
//   if(!deleteM){
//     res.status(404).send({error: "Movie not found"})
//   }

//   res.sendStatus(204)
// })



// router.route("/:id").put(async (req, res) => {
//   const id = req.params.id
//   if(!req.body){
//     return res.status(400).send({error: "Please send us information"})
//   }

//   const {name, releaseDate, runningTime} = req.body
//   if(!name || !releaseDate || !runningTime){
//     // dont need to put id above because it's already coming in as a parameter
//     return res.status(400).send({error: "Missing required params"})
//   }
  
//   if(!Number.isInteger(id) && id < 0){
//     return res.status(400).send({error: "Fix your ID please"})
//   }

//   const movie = await getMovie(id)
//   if(!movie){
//     return res.status(404).send({error: "Movie not found"})
//   }

//   const updated = await updateMovie({id, name, releaseDate, runningTime})
//   res.send(updated)
// })

