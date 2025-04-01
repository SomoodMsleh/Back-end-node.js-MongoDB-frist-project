import postModel from "../../../DB/Models/post.model.js";
import userModel from "../../../DB/Models/user.model.js";
import commentModel from "../../../DB/Models/comment.model.js";

export const addComment = async(req,res)=>{
    const {text} = req.body;
    const {id} = req.params;
    const userId = req.userId;
    const comment = await commentModel.create({text,userId,postId:id});
    return res.status(201).json({message:"successfully",comment});
};