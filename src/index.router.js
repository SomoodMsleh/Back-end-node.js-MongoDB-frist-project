import connectDB from "../DB/connection.js";
import authRouter from "./Modules/Auth/auth.router.js"
const initApp = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/g',(req,res)=>{
        return res.json({massage:"OK"});
    });
    app.use('/auth',authRouter);
    
}
export default initApp;