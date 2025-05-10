const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});


module.exports = mongoose.model('User', UserSchema);


// import mongoose from 'mongoose';

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   image: { type: String },  // URL or base64
//   author: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model('Blog', blogSchema);
