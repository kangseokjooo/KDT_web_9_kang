const models=require('../models');
const  {Op} =require('sequelize');

exports.index=(req,res)=>{
    res.render('index');
}

exports.signup=(req,res)=>{
    res.render('signup')
};

exports.getSignin=(req,res)=>{
    res.render('signin')
};




exports.post_signup=(req,res)=>{
    // console.log(req.body)
    // User.post_signup(req.body,()=>{
    //     res.send({result:true});
    // })
    models.User.create({
        userid:req.body.userid,
        name:req.body.name,
        pw:req.body.pw
    }).then((result)=>{
        console.log('result',result);
        res.send({result:true});
    })
}

exports.getUsers=(req,res)=>{
    // User.getUsers(req.body,(result)=>{
    //     if(result.length > 0){
    //         res.send({result:true,data:result[0]});
    //     }else{
    //         res.send({result:false,data:null});
    //     }
    // });
    const {userid,pw}=req.body;
    models.User.findOne({
        where:{userid,pw}
    }).then((result)=>{
        console.log('result',result);
        res.send({result:true,data:result});
    })
 };

 exports.post_profile=(req,res)=>{
    // User.post_profile(req.body,(result)=>{
    //     if(result.length > 0){
    //         res.render('profile',{data:result[0]})
    //     }
    // })
    models.User.findOne({
        where:{userid:req.body.userid}
    }).then((result)=>{
        res.render('profile',{data:result})
    })
 }

 exports.edit_profile=(req,res)=>{
    // User.edit_profile(req.body,()=>{
    //     res.send({result:true})
    // })
    models.User.update({
        userid:req.body.userid,
        name:req.body.name,
        pw:req.body.pw
    },{where:{id:req.body.id}}).then((result)=>{
        console.log('result',result);
        res.send({result:true});
    })
 }

 exports.delete_profile=(req,res)=>{
    // User.delete_profile(req.body.id,()=>{
    //     res.send({result:true})
    // })
    models.User.destroy({where:{id:req.body.id}}).then((result)=>{
        console.log('result',result)
        res.send({result:true})
    })
 }

 exports.findall=(req,res)=>{
    models.User.findAll({
        //attributes 원하는 컬럼 조회
        // attributes:['name','userid'],
        where:{id:{[Op.gte]:2}},
        order:[['id','DESC']],
        limit:1,
        offset:1,
    }).then((result)=>{
        console.log('result',result)
        res.send(result);
    })
 }
//  exports.profileuser=(req,res)=>{
//     res.render('profile')
// };