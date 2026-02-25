import * as YUP from 'yup';
let updateschema= YUP.object({
   name : YUP.string().required("inset name"),
   email: YUP.string().email("incorrect email id").required("insert your email"),
   city: YUP.string().required("insert your city"),
   address: YUP.string().required("insert your address"),
   contact: YUP.number().typeError("Only Number are accepted").min(1000000000, "Number Not Less Then 10").max(9999999999, "Number not more then 10").required("Insert Contact Number"),
   gender: YUP.string().required("insert your gender")
 })
 export default updateschema;