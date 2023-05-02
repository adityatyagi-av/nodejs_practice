const http =require('http')
const fs =require('fs');

const homePage= fs.readFileSync('./navbar-setup/index.html');
const styleFile=fs.readFileSync('./navbar-setup/styles.css')
const logo=fs.readFileSync('./navbar-setup/logo.svg')
const browserjs= fs.readFileSync('./navbar-setup/browser-app.js')


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
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.end(browserjs)
    }

    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.end(styleFile)
    }
    
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.end(logo)
    }

    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1>wrong page hit</h1>')
    }
    console.log('user hit the server')
})

server.listen(5400)