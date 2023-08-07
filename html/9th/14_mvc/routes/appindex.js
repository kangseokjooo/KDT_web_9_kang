const express=require('express');
const router=express.Router();
const controller=require('../controller/Login.js');

router.get('/',controller.main);

router.post('/axiospost',controller.login);

module.exports=router;