require('dotenv').config()

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secret = process.env.JWT_SECRET;


const authenticate = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, secret);
  const user = await User.findById(decoded..userId);
  if (!user) {
    throw new Error()
  }
  req.user = user;
  next()
}

module.exports = authenticate;