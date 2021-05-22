const express = require('express');
const setUpRoutes = require('./SetUpRoutes');

const app = express();
const port = process.env.PORT || 3002;

setUpRoutes(app);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
