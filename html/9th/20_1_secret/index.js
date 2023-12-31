const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();
let hash='';
//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get('/', (req, res) => {
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    console.log(Number(process.env.NUM));
    res.render('index');
});
app.post('/hash',(req,res)=>{
    const {pw}=req.body;
    // const hash=createHashedPassword(pw);
    //hash=createPbkdf(pw)
    hash=bcryptPassword(pw);
    res.json({hash});
})
app.post('/verify',(req,res)=>{
    const {pw}=req.body;
    //const compare=verifyPassword(pw , salt ,hash);
    const compare=comparePassword(pw,hash);
    res.json({compare})
});
app.post('/cipher',(req,res)=>{
    const {data}=req.body;
    const encrypt=cipherEncrypt(data);
    console.log("encrypt",encrypt);
    const decrypt=decipher(encrypt);
    res.send({decrypt});
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const crypto=require('crypto');

const createHashedPassword = (password) =>{
    //createHse(알고리즘).update(암호ㅇ화방식).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64');
}
//pbkdf2함수
const salt=crypto.randomBytes(16).toString('base64');
const iterations=1000; //반복횟수
const keylen=64; //생성키의 길이
const digest='sha512'; //암호화 알고리즘(hash)

//암호화 생성
const createPbkdf=(password)=>{
    //pbkdf2함수(비밀번호 ,솔트,키길이,알고리즘)
    //반환되는 값을 Buffer값
    const hash=crypto.pbkdf2Sync(password,salt,iterations,keylen,digest);
    // console.log(hash);
    return hash.toString('base64')
}
//암호 비교
const verifyPassword=(password , salt , dbPassword)=>{
    const compare=crypto.pbkdf2Sync(password,salt,iterations,keylen,digest).toString('base64');
    if (compare ===dbPassword){
        return true;
    }else {
        return false;
    }
};
//양방향
const algorithm='aes-256-cbc'; //256비트 키를 사용, 블록 크기는 128비트
const key=crypto.randomBytes(32);
const iv=crypto.randomBytes(16); //초기화 벡터,데이터블록을 암호화할 때 보안성을 높이기위해 사용
//암호화
const cipherEncrypt=(word)=>{
    const cipher=crypto.createCipheriv(algorithm,key,iv);//암호화 객체 생성
    let encryptedData = cipher.update(word,'utf-8','base64')//암호화할 데이터 처리
    encryptedData+=cipher.final('base64');
    return encryptedData;
}
//복호화
const decipher=(encryptedData)=>{
    const decipher=crypto.createDecipheriv(algorithm,key,iv);
    let decryptedData=decipher.update(encryptedData,'base64','utf-8');
    decryptedData+=decipher.final('utf-8');
    return decryptedData;
}


//bcrypt(단방향)
const bcrypt=require('bcrypt');
const saltNumber=10;

const bcryptPassword=(password)=>{
    return bcrypt.hashSync(password,saltNumber);
}

const comparePassword=(password,dbPassword)=>{
    return bcrypt.compareSync(password,dbPassword);
}