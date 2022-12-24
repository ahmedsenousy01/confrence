const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 5000;

http
.createServer(app)
.listen(port, () => console.log(`server listening on port ${port}`));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('database connection established'))
  .catch(err => console.log(err));
