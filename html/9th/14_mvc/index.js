const express=require('express');
const app=express();
const PORT=8000

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const comments=[
    {
        id:1,
        userId:'helloworld',
        date:'2023-08-01',
        comment:'안녕'
    },
    {
        id:2,
        userId:'hellowld',
        date:'2023-08-02',
        comment:'안'
    },
    {
        id:3,
        userId:'hello',
        date:'2023-08-03',
        comment:'오'
    },
    {
        id:4,
        userId:'world',
        date:'2023-08-04',
        comment:'하이'
    }
]

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/comments',(req,res)=>{
    res.render('comments',{commentInfos:comments})
})

app.get('/comment/:id',(req,res)=>{
    console.log(req.params.id);
    const commentid=req.params.id;
    console.log(comments[commentid-1])
    res.render('comment',{commentInfo:comments[commentid-1]});
})
//* 맨마지막에 선언
app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})