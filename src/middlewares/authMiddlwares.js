const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authMiddewares = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (req && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decodedUser = jwt.verify(token, process.env.jwt);
        //  find the user
        const user = await User.findById(decodedUser.id);
        // attach the user req obj
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorization");
    }
  } else {
    throw new Error("Thare is no token attached to the header");
  }
});

module.exports = authMiddewares;
