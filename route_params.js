const express= require('express')
const app =express();
const {products ,people}=require('./raw_data')


app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the page</h1><a href="/api/products">Click here to view products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name,image}=product
        return {id, name, image}
    })
   res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID}=req.params
    
    const product = products.find((product)=>product.id===Number(productID))
    console.log(product);
    res.json(product)
})




app.listen(5400,()=>{
    console.log("server is listening on the port 5400")
})