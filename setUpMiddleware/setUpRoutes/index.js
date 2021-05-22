const authenticationRoutes = require('./authentication');

const setUpRoutes = (app) => {
  app.use(authenticationRoutes);
};

module.exports = setUpRoutes;
