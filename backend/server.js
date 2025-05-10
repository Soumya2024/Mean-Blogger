// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const authRoutes = require('./routes/auth');
// // MONGO_URI = "MONGO_URI=mongodb+srv://auth:authapp@cluster0.cs0jqsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use('/api/auth', authRoutes);
// // // const cors = require('cors');  // Ensure this line exists only once


// // // const cors = require('cors');
// // // app.use(cors({
// // //   origin: 'http://localhost:3000', // frontend origin
// // //   credentials: true
// // // }));

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
// //   .catch(err => console.error(err));





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// // const corsOptions = {
// //   origin: 'http://localhost:3000',
// //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
// //   credentials: true,              
// //   optionsSuccessStatus: 200       
// // };

// const corsOptions = {
//   origin: 'http://localhost:3000',  // Make sure to allow requests from your React app
//   methods: ['GET', 'POST'],        // Allow these methods
//   allowedHeaders: ['Content-Type'], // Allow headers like Content-Type
// };

// // app.use(cors(corsOptions)); 
// // app.options('*', cors(corsOptions)); // enable preflight across all routes

// const authRoutes = require('./routes/auth');

// const app = express();
// app.use(cors(corsOptions)); 
// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', authRoutes);

// const MONGO_URI = process.env.MONGO_URI; // Use process.env to access Mongo URI

// mongoose.connect(MONGO_URI)
//   .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
//   .catch(err => console.error(err));





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = 5000;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
.catch(err => console.error("MongoDB connection error:", err));
