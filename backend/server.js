const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);
const PORT = 5000;

const app = express();

app.use(cors({ origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
 }));
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
.catch(err => console.error("MongoDB connection error:", err));




// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import blogRoutes from './routes/blogRoutes.js';
// import cors from 'cors';

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

// app.use('/api/blogs', blogRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
