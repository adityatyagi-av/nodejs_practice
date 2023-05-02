const express=require('express');
const path=require('path')
const app = express();

//setup of the static and middlewares
app.use(express.static('./public'))


// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/navbar-setup/index.html');
// })

app.all('*',(req,res)=>{
    res.status(404).send('resources not found')
})

app.listen(5000,()=>{
    console.log('server started on port 5000');
})