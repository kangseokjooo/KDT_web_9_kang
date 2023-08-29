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

io.on('connection',(socket)=>{
    // socket.on('open_message',(arg,cb)=>{
    //     console.log(arg);
    //     cb(arg);
    // });
    // socket.on('form_message',(arg)=>{
    //     console.log(arg);
    //     socket.emit('backend_message',arg);
    // });
    socket.on('hello',(arg)=>{
        console.log(arg);
        socket.emit('backend',arg);
    })
    socket.on('study',(arg)=>{
        console.log(arg);
        socket.emit('backend',arg);
    })
    socket.on('bye',(arg)=>{
        console.log(arg);
        socket.emit('backend',arg);
    })
})

//서버
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



