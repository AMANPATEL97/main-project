import mongoose from "../config/db.js";

let userschema=mongoose.Schema({
          name:String,
          email:String,
          password:String,
          city:String,
          address:String,
          gender:String,
          contact:String,
          image:{type:String, default : ""},
          status:{type : Number, default :1},
         otp : Number
         
},{ timestamps:true})

let user=mongoose.model("user",userschema)

export default user;

