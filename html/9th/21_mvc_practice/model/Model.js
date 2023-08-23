const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});
const users=[
    {
        id:1,
        name:'김민수',
        gender:'M',
        major:'전자공학'
    },
    {
        id:2,
        name:'kim',
        gender:'F',
        major:'english'
    },
    {
        id:3,
        name:'kang',
        gender:'M',
        major:'CI'
    },
    {
        id:4,
        name:'ko',
        gender:'F',
        major:'경영'
    }
];

module.exports=users;
