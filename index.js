const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./ROUTES/authRoutes');
const connectToDb = require('./config/db');

const app = express();




const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    connectToDb()
    console.log(`Server is running on port ${PORT}`);
});


// app.use(authRoutes);