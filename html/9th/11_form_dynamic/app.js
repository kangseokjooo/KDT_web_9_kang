const express=require('express');
const app=express();
const PORT=8000;

//body-parcer
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('app')
});

app.post('/axiospost',(req,res)=>{
    console.log('res',req.body)
    const appPW=1234;
    const appID=1234;
    if(req.body.id==appID&&req.body.pw==appPW){
        res.send(true)
    }else{
        res.send(false);
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})