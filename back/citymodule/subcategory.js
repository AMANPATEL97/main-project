import mongoose from "../config/db.js";


let subcateschema=mongoose.Schema({
    name:String,
    categoryId:{type: mongoose.Schema.Types.ObjectId, ref:"category"}
},{ timestramps:true})

let subcate=mongoose.model("subcategory",subcateschema);

export default subcate;