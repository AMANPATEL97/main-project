import mongoose from "mongoose";

let authschema=mongoose.Schema({
    name:string,
    username:string,
    password:string

},{ timestramps:true})

let authmodel=mongoose.model("admin",authschema)

export default authmodel;