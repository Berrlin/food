import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/FoodRoute.js"
import userRouter from "./routes/UserRoute.js"
import 'dotenv/config'
import cartRoute from "./routes/CartRoute.js"
import orderRoute from "./routes/OrderRoute.js"


//app config
const app = express()
const port = process.env.PORT ||4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//API Endpoint
app.use("/api/food",foodRoute)
app.use("/images",express.static('uploads')) //lay hinh anh tu trang uploads
app.use("/api/user",userRouter)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)

app.get("/",(req,res)=>{
    res.send("API Working")
})

//callback function ()=>
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://berrlin:123@cluster0.nygevkv.mongodb.net/?