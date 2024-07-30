/*

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
 

// Fetch comments for a specific post
router.get('/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId });
    return res.status(200).json({
      statusCode: 200,
      message: 'Fetched comments for post',
      data: { comments },
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Failed to fetch comments',
      error: error.message,
    });
  }
});

// Create a new comment for a specific post
router.post('/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { content, author } = req.body;

  // Create a new comment
  const newComment = new Comment({
    postId,
    content,
    author,
    createdAt: new Date(),
  });

  try {
    // Save the comment
    await newComment.save();
    return res.status(201).json({
      statusCode: 201,
      message: 'Comment added successfully',
      data: { comment: newComment },
    });
  } catch (error) {
    console.error('Error adding comment:', error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Failed to add comment',
      error: error.message,
    });
  }
});

module.exports = router;

*/
