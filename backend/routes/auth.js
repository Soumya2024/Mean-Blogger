const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json({ user });
});

module.exports = router;



// import express from 'express';
// import {
//   createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog
// } from '../controllers/blogController.js';

// const router = express.Router();

// router.post('/', createBlog);
// router.get('/', getAllBlogs);
// router.get('/:id', getBlogById);
// router.put('/:id', updateBlog);
// router.delete('/:id', deleteBlog);

// export default router;
