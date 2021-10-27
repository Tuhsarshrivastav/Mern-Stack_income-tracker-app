const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

//register users api
const register = expressAsyncHandler(async (req, res) => {
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
const fetchAllUser = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});


//login user
const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Find the user in db
  const userFound = await User.findOne({ email });

  //check if the user password match
  if (userFound && (await userFound.isPasswordMatch(password))) {
    res.json({
      _id: userFound._id,
      firstname: userFound.firstname,
      lastname: userFound.lastname,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      // token: generateToken(userFound._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login credentials");
  }
});

module.exports = { register, login, fetchAllUser };
