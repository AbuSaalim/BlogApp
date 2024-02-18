import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("✔ 😁 MongoDB is connected ✔");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || "500 Code Galat hai Bhaya";
  const message = err.message || "Internal Server Error";
  res.status(500).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("✔ 😆 Server is Running on port 3000 ✔");
});
