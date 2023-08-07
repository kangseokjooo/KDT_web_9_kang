const Login=require('../model/Mlogin');

exports.main=(req,res)=>{
    res.render('app')
};

exports.login=(req,res)=>{
    console.log('res',req.body)
    // const appPW=1234;
    // const appID=1234;
    const log=Login.Login();
    if(req.body.id==log[0]&&req.body.pw==log[1]){
        res.send(true);
    }else{
        res.send(false);
    }
}