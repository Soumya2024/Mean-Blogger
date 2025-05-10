const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const commentRoutes = require('./routes/comment');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Your server is up and running ...' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch(err => console.error('MongoDB connection error:', err));



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const PORT = 5000;

// const app = express();

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(express.json());

// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);


// const blogRoutes = require('./routes/blog');
// const commentRoutes = require('./routes/comment');
// // app.use('/blogs', require('./routes/blog'));	
// app.use('/api/blogs', blogRoutes);
// app.use('/api/comments', commentRoutes);


// app.get("/", (req, res) => {
// 	return res.json({
// 		success: true,
// 		message: "Your server is up and running ...",
// 	});
// });

// mongoose.connect(process.env.MONGO_URI)
// .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
// .catch(err => console.error("MongoDB connection error:", err));