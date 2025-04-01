import postModel from "../../../DB/Models/post.model.js";
import userModel from "../../../DB/Models/user.model.js";
import commentModel from "../../../DB/Models/comment.model.js";
export const getAll = async(req,res)=>{
    
    
    const posts = await postModel.find().populate([
        {path:'userId',select:'userName'},
        {path:'like',select:'userName'},
        {path:'unlike',select:'userName'}
    ]);
    // using loop 
    /* 
    const postList = [];
    for(const post of posts){
        const comment = await commentModel.find({postId:post._id});
        postList.push({post,comment})
    }
    **/

    // aggregate
    
    const posts = await postModel.aggregate(
        [
            {
                $lookup:{
                    from:'comments',
                    localField:'_id',
                    foreignField:'postId',
                    as:'comments'
                }
            }
        ]
    );
    
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
            $addToSet:{like:userId},
            $pull:{unlike:userId}
        },
        {
            new:true
        }
    );
    post.totalVote = post.like.length - post.unlike.length;
    await post.save();
    return res.status(200).json({message:"successfully",post});
};

export const unlikePost = async(req,res)=>{
    const {id} = req.params;
    const userId = req.userId;
    const post = await postModel.findByIdAndUpdate(id,{$addToSet:{unlike:userId},$pull:{like:userId}},{new:true});
    post.totalVote = post.like.length - post.unlike.length;
    await post.save();
    return res.status(200).json({message:"successfully",post});
};

export const addComment = async(req,res)=>{
    
};