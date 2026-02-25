import mongoose from "../config/db.js";

let cityschema=mongoose.Schema ({
    name:String,
    id:String,
    state:String
},{collection:"city1"})

let city=mongoose.model("city1",cityschema)

export default city;