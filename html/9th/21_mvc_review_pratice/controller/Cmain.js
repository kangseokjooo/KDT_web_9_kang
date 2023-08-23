const model = require('../model/Model');

const main = (req, res) => {
    res.render('index');
};
const user=(req,res)=>{
    res.render('user',{lists:model});
};

const useradd=(req,res)=>{
    res.render('useradd');
};
const useraddFunc=(req,res)=>{
    const {name,gender,major}=req.body;
    console.log(name,gender,major)
    res.send({name,gender,major,result:true,data:model})
}


module.exports={
    main,
    user,
    useradd,
    useraddFunc
}
