import userModel from "../../../DB/Models/user.model.js";

export const getAllUsers = async(req,res)=>{
    const users = await userModel.find();
    return res.status(200).json({message:"successfully",users});
};

export const getUser = async (req,res)=>{
    const {id} = req.params;
    const user = await userModel.findById(id);
    return res.status(200).json({message:"successfully",user});
};

export const updateUser = async(req,res)=>{
    const {id} = req.params;
    const {userName,email}= req.body;
    const user = await userModel.updateOne({_id:id},{userName,email});
    if(user.matchedCount==0){
        return res.status(404).json({message:"user not found "});    
    }
    if(user.modifiedCount==0){
        return res.status(400).json({message:"error "});
    }
    return res.status(200).json({message:"successfully",user});
};

export const updateConfirmEmail = async (req,res)=>{
    const user = await userModel.updateMany({confirmEmail:false},{confirmEmail:true});
    if(user.matchedCount==0){
        return res.status(404).json({message:"all Email confirm"});    
    }
    if(user.modifiedCount==0){
        return res.status(400).json({message:"all Email confirm"});
    }
    return res.status(200).json({message:"successfully",user});
};