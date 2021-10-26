const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

//register users api
module.exports.register = expressAsyncHandler(async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");
  try {
    if (userExists) {
      res.status(409).json({ success: false, message: "User already exists" });
    }
    //create new user
    const user = await User.create({ email, firstname, lastname, password });
    res.status(200).json(user);
  } catch (error) {}
});

// fetch all users

module.exports.fetchAllUser = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});
