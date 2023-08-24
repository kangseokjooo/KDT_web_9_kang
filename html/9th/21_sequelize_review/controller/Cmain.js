//const model = require('../model/Model');
//models/index에서 index는 생략
const {User}=require('../models'); 
const bcrypt=require('bcrypt');

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne:데이터베이스에서 하나의 정보를 찾을 때 사용 객체반환
    //where: 는 객체형태로 찾을 정보를 출력
    User.findOne({
        where:{id:req.params.number},
    }).then((result)=>{
        res.render('profile',{data:result});
    })
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const {userid,pw,name}=req.body;
    const hash=await bcryptPassword(pw);
    User.create({
        userid,
        pw:hash,
        name
    }).then(()=>{
        res.json({result:true});
    })
};
//로그인
const post_signin = async (req, res) => {
    const {userid,pw}=req.body
 const user= await User.findOne({
        where:{userid}
    });
    if(user){
        const result= await compareFunc(pw,user.pw);
        console.log(result);
        if(result){
            res.json({result:true, data:user})
        }else{
            res.json({result:false,message:'비밀번호가 틀렸습니다!'})
        }
    }else{
        res.json({result:false , message:'존재하는 사용자가 없습니다.'})
    }
    console.log('user',user);
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update (수정될 정보를 객체형태로,수정될곳 객체입력)
    const {name,pw,id}=req.body;
    User.update({name,pw},{where:{id}}).then(()=>{
        res.json({ result: true });
    });
};


//DELETE
const destroy=(req,res)=>{
    const {id}=req.body;
    User.destroy({
        where:{id},
    }).then(()=>{
        res.json({result:true})
    })
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    destroy
};


///
const bcryptPassword=(password)=>bcrypt.hash(password,11);
const compareFunc=(password,dbpass)=>bcrypt.compare(password,dbpass)
