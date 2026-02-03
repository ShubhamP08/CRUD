
const express=require('express')

const {home,createUser,getUser,deleteUser,updateUser}=require('../controllers/userController.js')

const router=express.Router()
router.get('/',home)
router.post('/createuser',createUser)
router.get('/getuser',getUser)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateuser/:id',updateUser)

module.exports=router