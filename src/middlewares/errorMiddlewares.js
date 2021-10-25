const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stacks: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

//not found
const notfound = (req, res, next) => {
  const error = new Error(`not found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notfound };
