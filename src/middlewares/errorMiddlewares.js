const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stacks: process.env.NODE_ENV !== "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
