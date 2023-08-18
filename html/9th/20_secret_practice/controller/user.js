const { User } = require('../models');
const  {Op} =require('sequelize');
const crypto=require('crypto');
const createHashedPassword = (password) =>{
    //createHse(알고리즘).update(암호ㅇ화방식).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64');
}
let hash='';
exports.index = (req, res) => {
    res.render('index');
};

exports.signup=(req,res)=>{
    res.render('signup')
};

exports.getSignin=(req,res)=>{
    res.render('signin')
};




exports.post_signup=(req,res)=>{
    const {userid,name,pw}=req.body
    User.create({
        userid,
        name,
        pw:createHashedPassword(pw)
    }).then((result)=>{
        console.log('result',result);
        res.send({result:true});
    })
}

exports.getUsers=(req,res)=>{
    const {userid,pw}=req.body;
    User.findOne({
        where:{userid,pw}
    }).then((result)=>{
        console.log('result',result);
        res.send({result:true,data:result});
    })
 };

 exports.post_profile=(req,res)=>{
    User.findOne({
        where:{userid:req.body.userid}
    }).then((result)=>{
        res.render('profile',{data:result})
    })
 }

 exports.edit_profile=(req,res)=>{
    User.update({
        userid:req.body.userid,
        name:req.body.name,
        pw:req.body.pw
    },{where:{id:req.body.id}}).then((result)=>{
        console.log('result',result);
        res.send({result:true});
    })
 }

 exports.delete_profile= async (req,res)=>{
    await User.destroy({where:{id:req.body.id}}).then((result)=>{
        console.log('result',result)
        res.send({result:true})
    })
 }

 exports.findall=(req,res)=>{
    User.findAll({
        where:{id:{[Op.gte]:2}},
        order:[['id','DESC']],
        limit:1,
        offset:1,
    }).then((result)=>{
        console.log('result',result)
        res.send(result);
    })
 }
