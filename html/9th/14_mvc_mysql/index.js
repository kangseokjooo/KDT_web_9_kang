const express=require('express');
const app=express();
const PORT=8000;

const mysql=require('mysql');

app.set('view engine','ejs')
app.set('views','./views')

app.use('/views',express.static(__dirname+'/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'kang',
    password:'1234567Aa!',
    database:'kdt9',
    port:3306,
});
conn.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('connect')
})
// const indexRouter =require('./routes');
// app.use('/',indexRouter);
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/visitor',(req,res)=>{
    const query='SELECT * from visitor'
    conn.query(query,(err,rows)=>{
        console.log(rows);
        res.render('visitor',{data:rows});
    })
    
});
app.get('/visitor/get',(req,res)=>{
    res.send('방명록 하나 조회')
});
app.post('/visitor/write',(req,res)=>{
    const query=`INSERT INTO visitor (name,comment) VALUES ('${req.body.name}','${req.body.comment}')`;
    conn.query(query,(err,rows)=>{
        console.log('rows',rows);
        res.send({id:rows.insertId, name:req.body.name, comment:req.body.comment});
    })
});
app.patch('/visitor/edit',(req,res)=>{
    res.send('방명록 하나 수정')
});
app.delete('/visitor/delete',(req,res)=>{
    res.send('방명록 하나 삭제')
});

//* 맨마지막에 선언
app.use('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
