// const mysql = require('mysql');
import { query } from 'express';
import mysql from 'mysql2/promise'

//mysql 연결
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'kang',
    password: '1234567Aa!',
    database: 'kdt9',
    port: 3306,
});
//createConnection :단일 연결 매번연결이 삭작될 때 마다 새로운 연결 생성
//연결수가 많으면 성능에 영향이 생김.
//createpool :여러연결 미리 생성하고 관리 
export const post_signup = async (data)=>{
    try {
        const query ='INSERT INTO user (userid,pw,name) VALUES (?,?,?)';
        await conn.query(query,[data.userid,data.pw,data.name])
    } catch (error) {
        console.log(error)
    }
};

export const post_signin = async (data)=>{
    try {
        const query='SELECT * FROM user WHERE userid= ? AND pw= ?'
        const [rows] =await conn.query(query,[data.userid,data.pw])
        console.log(rows)
        return rows;
    } catch (error) {
        console.log(error)
    }
}

export const post_profile =async (data)=>{
    try {
        const query = 'SELECT * FROM user WHERE userid= ? ';
      const [rows]= await conn.query(query,[data.userid])
      return rows;
    } catch (error) {
        console.log(error)
    }
}

export const edit_profile =async (data)=>{
    try {
        const query = 'UPDATE user SET userid=?, pw=?, name=? WHERE id=? ';
        await conn.query(query,[data.userid,data.pw,data.name,data.id])
    } catch (error) {
        console.log(error)
    }
    
}

export const delete_profile=async (id)=>{
    try {
        const query = 'DELETE FROM user WHERE id=?';
        await conn.query(query,[id])
    } catch (error) {
        console.log(error)
    }
}

