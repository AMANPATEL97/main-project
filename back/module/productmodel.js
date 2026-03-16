import mongoose from '../config/db.js';

let proschema=mongoose.Schema({
    title:String,
    price:Number,
    categoryId:{type :mongoose.Schema.Types.ObjectId,ref: "category" },
    subcategoryId:{type :mongoose.Schema.Types.ObjectId,ref: "subcategory" },
    brand: String,
    quantity: Number,
    costprice: Number,
    discount: Number,
    color: String,
    size: String,
    image: String,
    detail: String,
    f_price : Number


},{timestamps : true})

let pro =mongoose.model("product",proschema)

export default pro;
 