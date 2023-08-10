const mysql=require('mysql')

const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'kang',
    password:'1234567Aa!',
    database:'kdt9',
    port:3306,
});
conn.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('connect')
})

exports.post_signup=(data,callback)=>{
    const query=`INSERT INTO user (userid,name,pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
    conn.query(query,(err,rows)=>{
        console.log('post_signup',rows);
        callback(rows);
        
    })
}

exports.getUsers=(data,callback)=>{
    const query=`SELECT * from user WHERE userid='${data.userid}' AND pw='${data.pw}'`
    conn.query(query,(err,rows)=>{
        console.log('signin',rows)
        callback(rows);
    })
}

exports.post_profile=(data,callback)=>{
    const query=`SELECT * from user WHERE userid='${data.userid}'`
    conn.query(query,(err,rows)=>{
        console.log('profile',rows)
        callback(rows)
    })
}

exports.edit_profile=(data,callback)=>{
    const query=`UPDATE user SET userid='${data.userid}',name='${data.name}' ,pw='${data.pw}' WHERE id=${data.id}`;
    conn.query(query,(err,rows)=>{
        callback();
    })


}

exports.delete_profile=(id,callback)=>{
    const query=`DELETE FROM user WHERE id=${id}`
    conn.query(query,(err,rows)=>{
        callback();
    })
}