const express=require('express');
const app=express();
const PORT=8000;

//body-parcer
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('prac')
});

app.get('/axiosGET',(req,res)=>{
    console.log('back',req.query)
    res.send(req.query)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})