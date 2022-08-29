const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Welcome to our about page')    
    }
    res.end('<h1>Sorry but fuck you.</h1><a href="/">Home Baby</a>')
})

server.listen(5050);