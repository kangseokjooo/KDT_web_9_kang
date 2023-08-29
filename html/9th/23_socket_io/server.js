const http=require('http');
const express=require('express');
const SocketIO=require('socket.io');


const app=express();
const PORT=8000;


//http server
const server=http.createServer(app);
//socket 서버
const io =SocketIO(server);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('client');
})
app.get('/chat',(req,res)=>{
    res.render('chat');
})

io.on('connection',(socket)=>{
    console.log('조인 전',socket.rooms);
    socket.on('join',(res)=>{
        //채팅방을 생성하는 방법은 join(방 아이디)함수 사용. 방이존재하면 그 방으로 접속
        socket.join(res);
        socket.room = res;
        console.log('조인 후',socket.rooms);
        //broadcast는 나를 제외한 전체 사용자(브라우저)에게 메시지 전달
        // socket.broadcast.to(res).emit('create','새로운 브라우저가 입장 하였습니다');
        const roomInfo=io.sockets.adapter.rooms.get(res).size;
        console.log(roomInfo);
    });
    socket.on('message',(res)=>{
        //io.to(socket.room).emit('create',res):특정방의 전체 사용자에게 메시지 전달
        socket.emit('chat',res);
        socket.broadcast.to(socket.room).emit('other',res);

   });
    socket.on('leave',()=>{
        socket.leave(socket.room);
    })
    // socket.on('open_message',(arg,cb)=>{
    //     console.log(arg);
    //     cb(arg);
    // });
    // socket.on('form_message',(arg)=>{
    //     console.log(arg);
    //     socket.emit('backend_message',arg);
    // });
    //실습1
    // socket.on('hello',(arg)=>{
    //     console.log(arg);
    //     socket.emit('backend',arg);
    // })
    // socket.on('study',(arg)=>{
    //     console.log(arg);
    //     socket.emit('backend',arg);
    // })
    // socket.on('bye',(arg)=>{
    //     console.log(arg);
    //     socket.emit('backend',arg);
    // })
})

//서버
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



