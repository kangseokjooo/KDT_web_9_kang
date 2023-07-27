// const {b}=require("./module.js");
// console.log(b);
const http=require('http');
const fs=require('fs');

const server=http.createServer(function(req,res){
    // res.writeHead(200);
    // res.write("<h1>hello</h1>")
    // res.end("<p>end</p>")
    //파일전송
    try {
        const data=fs.readFileSync('./index.html')
        res.writeHead(200)
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404)
        res.end(error.massage);
    }
});

server.listen(8000,function(){
    console.log('8000번 포트로 실행');
});