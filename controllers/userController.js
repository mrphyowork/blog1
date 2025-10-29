const User = require("../modles/userModel");

// public
const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  const user = await User.create({ username, email, password });
  return res.status(201).json(user);

  //   res.json({ message: "Register the user" });
};

// public
const userLogin = async (req, res) => {
  res.json({ message: "Login the user" });
};

// private
const userProfile = async (req, res) => {
  res.json({ message: "Current user info" });
};

module.exports = { userRegister, userLogin, userProfile };
