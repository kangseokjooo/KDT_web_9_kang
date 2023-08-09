const express=require('express')
const controller =require('../controller/Cuser')
const router=express.Router();

router.get('/',controller.index);

router.get('/signup',controller.signup)

router.get('/signin',controller.getSignin)


router.post('/signup',controller.post_signup)

router.post('/signin',controller.getUsers)

router.post('/profile',controller.post_profile);

router.patch('/profile/edit',controller.edit_profile)

router.delete('/profile/delete',controller.delete_profile)

// router.get('/profile',controller.profileuser);

module.exports=router;