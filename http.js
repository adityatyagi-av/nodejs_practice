const http =require('http')
const fs =require('fs');

const homePage= fs.readFileSync('./index.html')

const server=http.createServer((req,res)=>{

    // console.log(req.method)
    // console.log(req.url)

    const url =req.url;
    
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>hey baby</h1>')
        res.end(`${homePage}`)
    }
    else if(url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>hey welcome to the about page</h1>')
        res.end('heyyyyyyyyyy')
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1>wrong page hit</h1>')
    }
    console.log('user hit the server')
})

server.listen(5000)