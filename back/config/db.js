import mongoose from "mongoose";
// import {db_url} from '../config/conn.js';
mongoose.connect(process.env.db_url)
.then(()=>{
    console.log("db conn...")
})
.catch((err)=>{
    console.log("db not conn...",err)
})
export default mongoose;