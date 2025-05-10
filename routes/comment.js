const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const comment = new Comment({ ...req.body, author: req.user.id });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Comment creation failed' });
  }
});

router.get('/:blogId', async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blogId }).populate('author', 'name');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});
