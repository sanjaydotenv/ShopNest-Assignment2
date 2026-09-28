import express from "express";
import cookieParser from "cookie-parser"

// import user Routes
import userRouter from "../routes/user.routes.js"

// import product Routes
import productRouter from "../routes/product.routes.js"

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", userRouter)
app.use("/api/products", productRouter)

export default app;
