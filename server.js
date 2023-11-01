import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import colors from "colors";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";

dotenv.config();
const app = express();


// database config
connectDB();

// middleWares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);



app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>");
    
})
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log( `Server is working on port ${PORT} `.bgBlack.gray);
});