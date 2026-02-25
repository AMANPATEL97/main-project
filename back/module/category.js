import mongoose from "../config/db.js";

let cateschema=mongoose.Schema({
    name:String
},{ timestramps:true})

let cate=mongoose.model("category",cateschema);

export default cate;