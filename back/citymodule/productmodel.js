import mongoose from '../config/db.js';

let proschema=mongoose.Schema({
    title:String,
    price:Number,
    categoryId:{type :mongoose.Schema.Types.ObjectId,ref: "category" },
    subcategoryId:{type :mongoose.Schema.Types.ObjectId,ref: "subcategory" },
    brand:String,
    quantity:String,
    costprice:String,
    discount:String,
    color:String,
    size:String,
    image:String,
    detail:String

},{timestamps : true})

let pro =mongoose.model("product",proschema)

export default pro;
 