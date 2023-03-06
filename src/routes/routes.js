import { Router } from "express";
import MovieController from "../controllers/MovieController.js";
const route = Router();

route.post("/movies",MovieController.createMovie);
route.get("/movies",MovieController.readAll);


export default route;