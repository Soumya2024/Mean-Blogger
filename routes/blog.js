const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const blog = new Blog({ ...req.body, author: req.user.id });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Blog creation failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});
