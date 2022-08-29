const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,res)=>{
    if (err){
        console.log(err);
        return
    }
    const first = res;
    readFile('./content/second.txt','utf8',(err,res)=>{
        if (err){
            console.log(err);
            return
        }
        const second = res
        writeFile('./content/result-async.txt',
                    `Data:\n\tFirst file data : ${first}\n\tSecond file data : ${second}\n`,
                    {flag:'a'},
                    (err,res)=>{
                        if (err){
                            console.log(err);
                            return
                        }
                        console.log(res);
                    }
                    
                    )
    })
})
