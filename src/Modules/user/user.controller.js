import userModel from "../../../DB/Models/user.model.js";

export const getAllUsers = async(req,res)=>{
    const users = await userModel.find();
    return res.status(200).json({message:"successfully",users});
};

export const getUser = async (req,res)=>{
    const {id} = req.params;
    const user = await userModel.findById(id);
    return res.status(200).json({message:"successfully",user});
}