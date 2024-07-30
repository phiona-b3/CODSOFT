const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
//const commentsRouter = require('./routes/comment');

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors())

app.use('/', indexRouter);
app.use('/api/posts', postsRouter);
app.use('/posts', postsRouter)
app.use('/register', usersRouter);
//app.use('/comments', commentsRouter);

const URL = process.env.MONGODB_URL;
mongoose.connect(URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  });

module.exports = app;