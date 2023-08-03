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
    limits:{fieldSize:5*1024*1024},
})

app.get('/',(req,res)=>{
    res.render('index');
})
//파일 단일
app.post('/upload', uploadDetail.single('userfile'), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
})
//여러개파일 ver1
app.post('/upload/array',uploadDetail.array('userfiles'),(req,res)=>{
    console.log(req.files);
    console.log(req.body);
});

//여러개파일 ver2
app.post('/upload/fields',uploadDetail.fields([{name:'userfile1'},{name:'userfile2'}]),(req,res)=>{
    console.log(req.files);
    console.log(req.body);
})

app.post('/dynamicFile',uploadDetail.single('dynamic-file'),(req,res)=>{
    console.log(req.file);
    res.send(req.file);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})