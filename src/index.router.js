import connectDB from "../DB/connection.js";
import authRouter from "./Modules/Auth/auth.router.js";
import userRouter from "./Modules/user/user.router.js";
import postRouter from "./Modules/post/post.router.js";
import commentRouter from "./Modules/comment/comment.router.js"
const initApp = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/',(req,res)=>{
        return res.json({massage:"OK"});
    });
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/post',postRouter);
    app.use('/comment',commentRouter);
}
export default initApp;