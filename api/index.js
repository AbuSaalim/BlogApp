import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'



dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('😁 MongoDB is connected');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('✔ 😆 Server is Running on port 3000 ✔');
});

app.use('/api/user', userRoute);