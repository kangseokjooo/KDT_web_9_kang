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
    console.log(wss.clients);
    console.log('클라이언트가 연결 되었습니다.');
    //sockets 배열에 추가
    sockets.push(socket);
    //message event
    socket.on('message',(message)=>{
        //웹소켓을 통해 클라이언트와 서버간에 데이터를 주고받을 때에는 일반적으로 문자열 또는 버퍼형태로 전달됨
        //서버가 모두 다른환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요=>버퍼를 쓰는 이유
        //console.log(message)
        //역 직렬화
       //const msg = JSON.parse(message);
    //    console.log(`클라이언트로 부터 받은 메세지: ${message}`)
    //msg.user , msg.message
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

