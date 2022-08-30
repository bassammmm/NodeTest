const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
    }else if(req.url==='/about'){
        for(let i = 0;i<1000000000;i++){
            for(let j = 0;j<1000000000;j++){
                console.log("hahaha");
            }    
        }
        res.end('About Page')
        
    }else{
        res.end("<a href='/'>Go back</a>")

    }

})


server.listen(5020,()=>{
    console.log('Server is listening on 5020');
})