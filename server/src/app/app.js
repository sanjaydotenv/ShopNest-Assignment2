import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// import user Routes
import userRouter from "../routes/user.routes.js";

// import product Routes
import productRouter from "../routes/product.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://shopnest-assignment2.vercel.app",
];
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/auth", userRouter);
app.use("/api/products", productRouter);

export default app;
