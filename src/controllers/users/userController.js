const User = require("../../model/User");
module.exports.register = async (req, res) => {
  const { email, firstname, lastname, password } = req.body;
  // check if user exists
  const userExists = await User.findOne({ email });
  try {
    if (userExists) {
      res.status(409).json({ success: false, message: "User already exists" });
    }
    const user = await User.create({ email, firstname, lastname, password });
    res.status(200).json(user);
  } catch (error) {}
};
