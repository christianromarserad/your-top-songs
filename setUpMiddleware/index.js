const morgan = require('morgan');
const setUpRoutes = require('./setUpRoutes');
const setUpError = require('./setUpError');

const setUpMiddleware = (app) => {
  app.use(morgan('dev'));
  setUpRoutes(app);
  setUpError(app);
};

module.exports = setUpMiddleware;
