import mongoose from '../config/db.js';

let AdminSchema=mongoose.Schema({
    name:String,
    username:String,
    password:String,
    status:{type : Number, default: 2}
},{timestamps : true});

let Admin = mongoose.model("admin",AdminSchema);

export default Admin;
