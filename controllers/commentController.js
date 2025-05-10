// controllers/commentController.js
const Blog = require('../models/Blog');

exports.addComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const comment = {
      text: req.body.text,
      user: req.user.id,
    };

    blog.comments.push(comment);
    await blog.save();

    res.status(201).json({ message: 'Comment added' });
  } catch (err) {
    res.status(500).json({ error: 'Could not add comment' });
  }
};
