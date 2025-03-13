import { model, Schema, Types } from "mongoose";
const userSchema = new Schema({
    userName:{
        
    },
    email:{

    },
    password:{

    },
    confirmEmail:{

    },
    gender:{

    }
});

const userModel = model('User',userSchema);
export default userModel;