//loading http module
const http=require('http');

let server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('Hello how are you');
        res.end();
    }
    if(req.url==='/page'){
        res.write('This is on page url');
        res.end();
    }

});

server.listen(3000);

console.log('Listening on poet 3000...');


