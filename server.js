const express = require('express');
const setUpMiddleware = require('./setUpMiddleware');
require('./database'); //setup the database

const app = express();
const port = process.env.PORT || 3002;

setUpMiddleware(app);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
