const morgan = require('morgan');
const setUpRoutes = require('./setUpRoutes');

const setUpMiddleware = (app) => {
  app.use(morgan('dev'));
  setUpRoutes(app);
};

module.exports = setUpMiddleware;
