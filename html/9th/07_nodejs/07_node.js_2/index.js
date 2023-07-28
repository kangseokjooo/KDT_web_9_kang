const express=require('express');

const app=express();

const PORT=8000;

app.set('view engine','ejs');
app.set('views','./views');

//정적 파일 불러오기
app.use('/public', express.static('./public'))

app.get('/',function(req,res){
    //send() 클라이언트의 응답 데이터를 보낼때
    // res.send("Hello Express");
    res.send({result: true,code: 1000,message: "회원가입 성공",data: {name:"kang"}});
});
app.get('/kdt9',function(req,res){
    //send() 클라이언트의 응답 데이터를 보낼때
    // res.send("Hello Express");
    // res.send({result: true,code:1000,message:"회원가입 성공",data:{name:"kang"}});
    //render() 뷰엔진을 랜더링
    res.render('test');
});
app.get('/99',function(req,res){
    res.render('test',{name:[1,2,3,4,5,6,7,8,9]});
});

app.listen(PORT,function(){
    console.log(`http://localhost: ${PORT}`);
});