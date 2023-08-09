const express=require('express');
const app=express();
const PORT=8000;


app.set('view engine','ejs')
app.set('views','./views')

app.use('/views',express.static(__dirname+'/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//router
// const userRouter=require('./routes/user')
// const indexRouter =require('./routes');
// app.use('/',indexRouter);
const userRouter=require('./routes/user')

app.use('/user',userRouter);

//* 맨마지막에 선언
app.use('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})