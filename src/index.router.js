import connectDB from "../DB/connection.js";
import authRouter from "./Modules/Auth/auth.router.js";
import userRouter from "./Modules/user/user.router.js";
const initApp = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/g',(req,res)=>{
        return res.json({massage:"OK"});
    });
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    
}
export default initApp;