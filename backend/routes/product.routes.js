const express = require("express");

const productRouter = express.Router();
const { ProductModel } = require("../models/Product.model");

productRouter.get("/", async (req, res) => {
  const allquery=req.query
  const page=allquery._page||1
  const page_limit=allquery._limit
  if(Object.keys(allquery).length===0){
     try{
      const products = await ProductModel.find()
      res.send(products)
     }
     catch(err){
      console.log(err)
     }
  }
  else if(allquery.category){
    try{
      if(allquery._order){
        if(allquery._order=="asc"){
          const products = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:1}).skip((page*page_limit)-page_limit).limit(page_limit);
          const totalproduct = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:1});

          res.send({"data":products,"datacount":totalproduct.length});
        }else if(allquery._order=="desc"){
          const products = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:-1}).skip((page*page_limit)-page_limit).limit(page_limit);;
          const totalproduct = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:-1});
          res.send({"data":products,"datacount":totalproduct.length});
        }
      }else{
          const products = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).skip((page*page_limit)-page_limit).limit(page_limit);;
          const totalproduct = await ProductModel.find({$and:[{$or:[{category:allquery.category[0]},{category:allquery.category[1]},{category:allquery.category[2]},{category:allquery.category[3]},{category:allquery.category[4]},{category:allquery.category[5]}]},{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]})
          res.send({"data":products,"datacount":totalproduct.length});
      }
        
    }
    catch(err){
      console.log(err)
      res.send(err)
  }
}else if(allquery._order){
  if(allquery._order=="asc"){
    const products = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:1}).skip((page*page_limit)-page_limit).limit(page_limit);
    const totalproduct = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:1})
    res.send({"data":products,"datacount":totalproduct.length});
  }else if(allquery._order=="desc"){
    const products = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:-1}).skip((page*page_limit)-page_limit).limit(page_limit);
    const totalproduct = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).sort({price:-1})
    res.send({"data":products,"datacount":totalproduct.length});
  }
}else{
  const products = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]}).skip((page*page_limit)-page_limit).limit(page_limit);
  const totalproduct = await ProductModel.find({$and:[{price:{$gt:allquery.price_gte}},{price:{$lt:allquery.price_lte}}]})
  res.send({"data":products,"datacount":totalproduct.length});
}

});

productRouter.get("/:productID",async(req,res)=>{
  const id=req.params.productID
   try{
       const singledata=await ProductModel.find({_id:id})
       res.send(singledata)
   }
   catch(err){
       console.log(err)
   }
})
// productRouter.post("/add", async (req, res) => {
//   let data = req.body;
//   await ProductModel.insertMany(data);
//   res.send("added");
// });
module.exports = { productRouter };
