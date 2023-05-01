const http =require('http')

const server=http.createServer((req,res)=>{

    console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>hey baby</h1>')
    res.end('hey dude fuck you')
    console.log('user hit the server')
})

server.listen(5000)