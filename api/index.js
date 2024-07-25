require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("../config/dbConnect");
const mongoose = require("mongoose");
const cors = require('cors');

// Apply CORS middleware first
app.use(cors({
  origin: 'https://frontend-blogging.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

connectDB();

// user routes for /api/users and /api/user
app.use("/api", require("../routes/userRoutes"));

// article routes   
app.use("/api/articles", require("../routes/articleRoutes"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log('Error while connecting to MongoDB: ', err)
});
