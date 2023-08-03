const express=require('express');
const multer=require('multer');
const path=require('path');
const app=express();
const PORT=8000;

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/upload',express.static(__dirname+'/upload'))
//multer
const upload=multer({
    dest:'upload/'
});
const uploadDetail=multer({
    //disk--:파일을 디스크에 저장하기 위한 모든제어기능을 제공
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'upload/')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname)
            console.log('ext',ext);
            done(null,path.basename(file.originalname,ext)+Date.now()+ext)
        }
    }),
    limits:{fileSize:5*1024*1024},
})

app.get('/',(req,res)=>{
    res.render('app');
})

app.post('/upload/prac',uploadDetail.single('dynamic-file'),(req,res)=>{
    console.log(req.file);
    res.send({data: req.body, file: req.file});
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})