import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('Connection has been established successfully.')
    }catch(error){
        console.log(`Unable to connect to the database: ${error}`);
    }
}
export default connectDB;