import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect('mongodb+srv://somood:somood@cluster0.os22fcn.mongodb.net/test');
        console.log('Connection has been established successfully.')
    }catch(error){
        console.log(`Unable to connect to the database: ${error}`);
    }
}
export default connectDB;