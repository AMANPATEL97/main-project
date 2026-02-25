import express from 'express';
import cors from 'cors';
import Allroute from './routes/ALLroute.js';
// import { port } from './config/conn.js';
import pdf from 'pdf-creator-node';
import fs from 'fs';
import upload from 'express-fileupload';

import PATH from 'path';

let app=express()
app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({succes:true}))
app.use(express.static(PATH.resolve()+"/assets"));

app.use(Allroute)

var html = fs.readFileSync("template.html", "utf8");
var document = {
  html: html,
  data: {},
  path: "./output.pdf",
  type: "",
};
 var options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: ''
        }
    };

app.get("/demo",async(req,res)=>{
    pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
})

let port = process.env.port;
app.listen(port,()=>{
    console.log("server running port",port)
})


// xsmtpsib-7aa1c5f8b9112f386d54a4bcbdb65479f6ce136850accabcd9420ae93787d868-Y6ejYHHjRjfTqjOO



// mongodb ma cluster name "frontend"