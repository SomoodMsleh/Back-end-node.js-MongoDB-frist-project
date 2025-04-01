import postModel from "../../../DB/Models/post.model.js";
import userModel from "../../../DB/Models/user.model.js";

export const getAll = async(req,res)=>{
    const posts = await postModel.find();
    return res.status(200).json({message:"successfully",posts});
};

export const createPost = async(req,res)=>{
    const {title,caption} = req.body;
    const post = await postModel.create({title,caption,userId:req.userId});
    return res.status(201).json({message:"successfully",post});
};

