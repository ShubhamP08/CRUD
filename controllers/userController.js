const User = require("../model/userModel");

exports.home=(req,res)=>{
    res.send("Hello World");
}

exports.createUser=async(req,res)=>{
    try{
        const {name,email}=req.body
        if(!name||!email) {
            throw new Error("Name and Email are required");
        }
        const userexist= await User.findOne({email:email})
        if(userexist){
            throw new Error("User Already exist")
        }
        const user=await User.create({
            name:name,
            email:email
        })
        res.status(201).json({
            success:true,
            message:"User Created Successfully",
            user
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            success:false,
            message:"Failed to create User",
        })
    }
}

exports.getUser=async(req,res)=>{
    try{
        const users = await User.find({});
       
        res.status(200).json({
            success:true,
            message:"User Fetched Successfully",
            users
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            success:false,
            message:"Failed to get User"
        })
    }
}

exports.deleteUser=async(req,res)=>{
    try {
        const userID=req.params.id
        await User.findByIdAndDelete(userID)
        res.status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"Cannot delete user"
        })
    }
}

exports.updateUser=async(req,res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            message:"User Updated Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"Cannot Update user"
        })
    }
}