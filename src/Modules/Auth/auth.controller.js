import userModel from "../../../DB/Models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req,res)=>{
    const {userName,email,password,age} = req.body;
    const hashPassword = bcrypt.hashSync(password,8);    
    //const user = await userModel.create({userName,email,password:hashPassword});
    const user = new userModel({userName,email,password:hashPassword,age});
    await user.save();
    return res.status(201).json({message:"successfully",user});
} 

export const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const check = bcrypt.compareSync(password,user.password);
    if(!check){
        return res.status(404).json({message:"invalid password"});
    }
    return res.status(200).json({message:"successfully",user});
}