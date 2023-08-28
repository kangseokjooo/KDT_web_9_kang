const ws=require('ws');
const express=require('express');
const app=express();
const PORT=8000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('client');
})

const server=app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});

//웹소켓 서버접속
const wss=new ws.Server({server});
//브라우저를 담을 배열 변수
const sockets=[];
//socket 변수는 접속한 브라우저
wss.on('connection',(socket)=>{
    // console.log(socket);
    console.log('클라이언트가 연결 되었습니다.');
    //sockets 배열에 추가
    sockets.push(socket);
    //message event
    socket.on('message',(message)=>{
        console.log(`클라이언트로 부터 받은 메세지: ${message}`)
        //socket.send(`서버 메시지:${message}`);
        sockets.forEach((elem)=>{
            elem.send(`${message}`);
        })
    });
    //error event
    socket.on('error',(error)=>{
        console.log('에러가 발생하였습니다',error);
    });
    //close event
    socket.on('close',()=>{
        console.log('클라이언트와 연결이 종료됨')
    })
});

