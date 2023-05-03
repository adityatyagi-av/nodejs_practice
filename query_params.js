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
    
    if(!product){
        return res.status(404).send('Product doesnot exist')
    }
    console.log(product);
    res.json(product)
})
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))

    }
    if(sortedProducts.length<1){
       return res.json({status: 'no data found'})
    }

    console.log(req.query)
    res.json(sortedProducts)
    // res.send("I think this is working")
})

app.get('/api/products/:productID/reviews/:feedback',(req,res)=>{
    console.log(req.params)
    res.send("welcome to this page buddy")
})

app.listen(5400,()=>{
    console.log("server is listening on the port 5400")
})