const express=require('express')
const cookieParser=require('cookie-parser')
const app=express();
const PORT=8000;

app.set('view engine','ejs');
//cookie-parser
//일반 쿠키
// app.use(cookieParser())
app.use(cookieParser("asdfzxcv"))
//cookie 옵션 객체
const cookieConfig={
    //httpOnly:웹 서버를 통해서만 쿠키에 접근가능
    //자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는것을 차단
    //maxAge:쿠키의 수명. 밀리초
    //expires:만료 날짜 GMT시간설정
    //path:해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고
    //웹브라우저는 해당하는쿠키만 웹서버에 전송
    //즉 쿠키가 전송될 url특정 가능(기본값:/)
    //domain:쿠키가 전송될 도메인은 특정가능(기본값:현재 도메인)
    //secure:웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
    //signed:쿠키의 암호화결정 (req.signedCookies객체에 들어있다)
    httpOnly:true,
    maxAge:60 * 1000,
    signed:true,
}

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/setCookie',(req,res)=>{
    //쿠키이름 ,쿠키값,옵션객체
    res.cookie('myCookie','myValue',cookieConfig)
    res.send('set cookie')
})

app.get('/getCookie',(req,res)=>{
    res.cookie('myCookie','myValue',cookieConfig)
    res.send(req.signedCookies);
})

app.get('/clearCookie',(req,res)=>{
    res.clearCookie('myCookie','myValue',cookieConfig)
    res.send({result:true});

})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})