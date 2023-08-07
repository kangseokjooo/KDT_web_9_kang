// const mysql=require('mysql')
// const conn =mysql.createConnection({
//     host:'localhost',
//     user:'kang',
//     password:'1234567Aa!',
//     database:'kdt9'
// });

exports.getVisitors=()=>{
    return [
        {id:1,name:'홍길동',comment:'내가왔다'},
        {id:2,name:'강석주',comment:'으라차차'},
    ]
}
