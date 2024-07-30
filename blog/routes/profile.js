const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authenticate = require('../middleware/authenticate');

//Fetch User profile
router.get('/:userId', authenticate, async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user)
})

//update user profile
router.put('/:userId', authenticate, async (req, res) => {
  const { bio, profilePicture } = req.body;
  const user = await User.findByIdAndUpdate(req.params.userId, { bio, profilePicture }, { new: true });
  res.json(user);
})

module.exports = router;