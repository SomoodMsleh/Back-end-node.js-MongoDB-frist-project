import userModel from "../../../DB/Models/user.model.js";

export const registerUser = async (req,res)=>{
    const {userName,email,password} = req.body;
    const user = await userModel.create({userName,email,password});
    return res.status(201).json({message:"successfully",user});
} 