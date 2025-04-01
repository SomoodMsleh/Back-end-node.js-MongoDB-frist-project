import jwt from 'jsonwebtoken';

export const auth = ()=>{
    return (req,res,next)=>{
        const {token} = req.headers;
        if(!token){
            return res.status(404).json({massage:"invalid authorization "})
        }
        const decoded = jwt.verify(token,'SomoodAdwan');
        req.userId = decoded.id;

        next();

    };
};