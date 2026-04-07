import express from 'express';
import cors from 'cors';
import Allroute from './routes/ALLroute.js';
import upload from 'express-fileupload';
import PATH from 'path';

let app=express()
const root = PATH.join(PATH.resolve()+"/dist");
app.use(express.static(root));

app.use(cors());
app.use(upload());
app.use(express.json())
app.use(express.urlencoded({succes:true}))
app.use(express.static(PATH.resolve()+"/assets"));

app.use(Allroute)
app.get('/{*splat}', (req, res)=>{
    res.sendFile("index.html", {root})
    // res.send()
})




let port = process.env.port;
app.listen(port,"0.0.0.0",()=>{
    console.log("server running port",process.env.port)
})



// xsmtpsib-7aa1c5f8b9112f386d54a4bcbdb65479f6ce136850accabcd9420ae93787d868-Y6ejYHHjRjfTqjOO



// mongodb ma cluster name "frontend"


// git remote add origin https://github.com/AMANPATEL97/tss-3-live-admin.git

