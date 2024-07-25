import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://berrlin:123@cluster0.nygevkv.mongodb.net/food-del').then(()=>console.log("DB connected"))
}