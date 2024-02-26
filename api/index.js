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
    console.log('MongoDB mai problem aayi hais');
  });

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute); // auth route ko pehle use karo
app.use("/api/user", userRoute);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if statusCode is not defined
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(3000, () => {
  console.log("✔ 😆 Server is Running on port 3000 ✔");
});
