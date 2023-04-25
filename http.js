const http=require('http')
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
   `)
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

server2.listen(4400);