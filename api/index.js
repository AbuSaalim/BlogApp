const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

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