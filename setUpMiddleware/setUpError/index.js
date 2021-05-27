const CustomError = require('../../error/customError');

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    console.log(err);
    res.status(500).send({ message: 'An error occured in the server' });
  }
};

const setUpError = (app) => {
  app.use(errorMiddleware);
};

module.exports = setUpError;
