import express from 'express';

import CityRoutes from './CityRoutes.js';

let routes = express.Router();



routes.use("/api/v1/city", CityRoutes);




export default routes;