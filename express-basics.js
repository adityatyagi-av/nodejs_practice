//this is one of the shortest method used to invoke the express function
// const app=require('express')();

const express =require('express')
const app =express();

app.get('/',(req,res)=>{
    res.status(200).send('Home page');
})

app.get('/about',(req,res)=>{
    res.status(200).send('About page');
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
    
})



app.listen(5000,()=>{
    console.log('server is running on port 5000');
})