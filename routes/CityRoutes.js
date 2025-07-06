import express from 'express'
import {getAllCity} from '../controllers/CityController.js'
let routes = express.Router();

routes.get("/", getAllCity);

export default routes;