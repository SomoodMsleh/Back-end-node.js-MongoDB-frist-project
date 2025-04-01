import postModel from "../../../DB/Models/post.model.js";

export const getAll = async(req,res)=>{
    const posts = await postModel.find();
    return res.status(200).json({message:"successfully",posts});
};

