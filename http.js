const http=require('http')
const fs=require('fs')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/html'})
// })

const server=http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to our homepage')
   }
   if(req.url==='/about'){
    res.end('Here is our short history')
   }
   res.end(`
   <h1>hey there how are you</h1>
   <p>welcome baby</p>
   `);
})
const server1=http.createServer((req,res)=>{
    res.write("hey buddy this is the server 2");
    res.end();
})
server1.listen(4300);

server.listen(4500)


const server2=http.createServer((req,res)=>{
    res.write("hey buddy this is the server 2");
    res.end();
    console.log(req)
})
const server3=http.createServer((req,res)=>{
    // const text=fs.readFileSync('./content/subfolder/big.txt','utf-8')
    // res.end(text)

    const text2=fs.createReadStream('./content/subfolder/big.txt',{highWaterMark: 10000})
    text2.on('open',(result)=>{
        text2.pipe(res)
    })
    text2.on('error',(error)=>{
        console.log(error)
    })
})
server3.listen(5000);

server2.listen(4400);