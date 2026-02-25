import express from 'express';
import auth from '../citycontroller/authcontroller.js'

let rout=express.Router();

rout.post("/",auth)

export default rout;
