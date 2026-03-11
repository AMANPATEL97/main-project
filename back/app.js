import express from 'express';
// import mongoose from "mongoose";
// // import {db_url} from '../config/conn.js';
// mongoose.connect("mongodb+srv://aman:aman12345678@cluster0.ygucfqq.mongodb.net/?appName=Cluster0")
// .then(()=>{
//     console.log("db conn...")
// })
// .catch((err)=>{
//     console.log("db not conn...",err)
// })
// export default mongoose;



import cors from 'cors';
import Allroute from './routes/ALLroute.js';
// import { port } from './config/conn.js';


import upload from 'express-fileupload';

import PATH from 'path';

let app=express()
app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({succes:true}))
app.use(express.static(PATH.resolve()+"/assets"));

app.use(Allroute)


let port = process.env.port;
app.listen(port,()=>{
    console.log("server running port",process.env.port)
})


// xsmtpsib-7aa1c5f8b9112f386d54a4bcbdb65479f6ce136850accabcd9420ae93787d868-Y6ejYHHjRjfTqjOO



// mongodb ma cluster name "frontend"