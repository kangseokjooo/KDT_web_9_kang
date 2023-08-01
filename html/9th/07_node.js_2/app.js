const express=require('express');
const app=express();
const PORT=8000;

app.set('view engine','ejs');
app.set('views','./views');

//정적 파일 불러오기
app.use('/public', express.static('./public'))

app.get('/1',function(req,res){
    res.render('prac01');
})
app.get('/2',function(req,res){
    res.render('prac02');
})
app.get('/3',function(req,res){
    res.render('prac03');
})
app.listen(PORT,function(){
    console.log(`http://localhost: ${PORT}`);
});