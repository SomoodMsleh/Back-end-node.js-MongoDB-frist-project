import { model, Schema, Types } from "mongoose";

const postSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    caption:{
        type:String,
    },
    userId:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    like:[
        {
            type:Types.ObjectId,
            ref:"User"
        }
    ],
    unlike:[
        {
            type:Types.ObjectId,
            ref:"User",
        }
    ],
    totalVote:{
        type:Number,
        default:0
    }
});

const postModel = model('Post',postSchema);
export default postModel;