const Comment=require('../model/MComment');

exports.main =(req,res)=>{
    res.render('index')
};
exports.comments=(req,res)=>{
    res.render('comments',{commentInfos:Comment.comments()})
};
exports.comment=(req,res)=>{
    console.log(req.params.id);
    const commentid=req.params.id;
    const comments=Comment.comments();
    console.log(comments[commentid-1])
    res.render('comment',{commentInfo:comments[commentid-1]});
};