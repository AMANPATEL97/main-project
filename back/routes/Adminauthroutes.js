import { Auth } from "../citycontroller/Adminauthcontroller.js";
import express from 'express';

let routes = express.Router();

routes.post("/",Auth);

export default routes;