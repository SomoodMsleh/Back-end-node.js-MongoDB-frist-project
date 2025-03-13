import connectDB from "../DB/connection.js";

const initApp = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/g',(req,res)=>{
        return res.json({massage:"OK"});
    });
}
export default initApp;