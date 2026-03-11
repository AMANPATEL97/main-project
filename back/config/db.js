import mongoose from "mongoose";
import dns from 'node:dns/promises'
dns.setServers(["8.8.8.8","1.1.1.1"]);
// import {db_url} from '../config/conn.js';
mongoose.connect(process.env.db_url)
.then(()=>{
    console.log("db conn...")
})
.catch((err)=>{
    console.log("db not conn...",err)
})
export default mongoose;