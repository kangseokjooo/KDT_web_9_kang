const express=require('express');
const app=express();
const PORT=8000;

//body-parcer
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const router =require('./routes/appindex');
app.use('/',router);

app.use('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})