const express=require('express');
const app=express();
const PORT=8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    // console.log(req.body);
    res.render('index',{ title:'폼 전송 실습' });
});

app.get('/getForm',(req,res)=>{
    console.log(req.query);
    res.render('result',{
        title:"GET요청 폼 결과 확인하기",
        userInfo:req.query,
    });
});

app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render('result',{
        title:"POST 폼 결과 확인하기",
        userInfo:req.body,
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});