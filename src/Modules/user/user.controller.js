import userModel from "../../../DB/Models/user.model.js";

export const getAllUser = async(req,res)=>{
    const users = await userModel.find();
    return res.status(200).json({message:"successfully",users});
};