import Product from "../module/productmodel.js";
import cate from '../module/category.js'
import subcate  from '../module/subcategory.js'
let GetAllProduct = async(req, res)=>{
  let where = {};
    if(Object.keys(req.query).length == 0){
    }
    if(req.query.color){
        where.color = req.query.color;
        // {color : "red"}
    }
    if(req.query.discount){
        where.discount = {$gte : req.query.discount};

    }
    if(req.query.size){
        where.size = req.query.size;
    } // { color : "red", size : "M"}
    
    if(req.query.category){
        // console.log(req.query.category)
        let result_cate = await  cate.find({name : req.query.category});
        
        where.categoryId = result_cate[0]._id;

    }
    if(req.query.subcategory){
        let result_cate = await  cate.find({name : req.query.category});
        let result_subcate = await subcate.find({name : req.query.subcategory});
        where.categoryId = result_cate[0]._id;
        where. subcategoryId = result_subcate[0]._id;

    }
    if(req.query.brand){
        where.brand = req.query.brand;
    }


    if(req.query.min && req.query.max){
        let temp = {...where};
        where = {$and : [{price : {$gte : req.query.min}}, {price : {$lte : req.query.max}}, temp]};
        
    }
    

    
    // find({age : {$gte : 25}})
    // find({ $and : [{ price : {$gte : 1700 }}, {price : {$lte : 3500 }}, {color : "red", discount : 10, size : 'M'}]})
    
    
    
    let result = await Product.find(where).populate("categoryId").populate("subcategoryId").exec();
    res.send({success:true, result : result});

}

// let GetAllProduct = async(req, res)=>{
//     console.log(req.query)
//     if(req.query.color){

//         let result = await Product.find({color:req.query.color})
//         res.send({success:true, result : result});
//     }
// }
    
export {GetAllProduct}