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

export const likePost = async(req,res)=>{
    const {id} = req.params;
    const userId = req.userId;
    const post = await postModel.findByIdAndUpdate(id,{
        $push:{
            like:userId
        }},
        {
            new:true
        }
    );
    return res.status(200).json({message:"successfully",post});
};

export const unlikePost = async(req,res)=>{
    
};