const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const userRouter = require('./routes/user.routes')
const summitRouter = require('./routes/summit.routes')

// middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

//routes
app.use('/users', userRouter);
app.use('/summits', summitRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;