const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시데이터
const comments=[
    {
        id:1,
        userid:'hello',
        data:'2023-08-05',
        comment:'안녕!'
    },
    {
        id:2,
        userid:'he1',
        data:'2023-08-09',
        comment:'잘가'
    },
    {
        id:3,
        userid:'hel2',
        data:'2023-08-11',
        comment:'안녕!잘가!'
    },
    {
        id:4,
        userid:'hell3',
        data:'2023-08-13',
        comment:'안녕!잘가!반가워!'
    },
];

module.exports=comments;
