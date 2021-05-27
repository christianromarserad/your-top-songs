const mongoose = require('mongoose');
const users = require('./models/user');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let connectionObject = mongoose.connection;

//Connnection event for mongoose
connectionObject.once('open', () => {
  console.log('Connected to MongoDB');
});

//Error event for mongoose
connectionObject.on('error', (err) => {
  console.log(err);
});

const db = {
  users
};

module.exports = db;
